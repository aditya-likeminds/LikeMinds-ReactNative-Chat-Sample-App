import React, {useState, useLayoutEffect, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Platform,
  Alert,
  ActivityIndicator,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {myClient} from '../..';
import {getNameInitials} from '../../commonFuctions';
import HomeFeedExplore from '../../components/HomeFeedExplore';
import HomeFeedItem from '../../components/HomeFeedItem';
import STYLES from '../../constants/Styles';
import {onValue, ref} from '@firebase/database';
import {AppDispatch, useAppDispatch, useAppSelector} from '../../store';
import {
  getHomeFeedData,
  initAPI,
  profileData,
  updateHomeFeedData,
} from '../../store/actions/homefeed';
import styles from './styles';
import {SET_PAGE} from '../../store/types/types';
// import {onValue, ref} from 'firebase/database';

interface Props {
  navigation: any;
}

const HomeFeed = ({navigation}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [communityId, setCommunityId] = useState('');
  const dispatch = useAppDispatch();
  const {myChatrooms, unseenCount, totalCount, page} = useAppSelector(
    state => state.homefeed,
  );
  const user = useAppSelector(state => state.homefeed.user);
  const db = myClient.fbInstance();
  const setOptions = () => {
    navigation.setOptions({
      title: '',
      headerShadowVisible: false,
      headerLeft: () => (
        <TouchableOpacity>
          <Text
            style={{
              color: STYLES.$COLORS.PRIMARY,
              fontSize: STYLES.$FONT_SIZES.XL,
              fontFamily: STYLES.$FONT_TYPES.BOLD,
            }}>
            Community
          </Text>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{
            width: 35,
            height: 35,
            borderRadius: STYLES.$AVATAR.BORDER_RADIUS,
            backgroundColor: !!user?.image_url ? 'white' : 'purple',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
            paddingTop: Platform.OS === 'ios' ? 5 : 3,
          }}>
          {!!user?.image_url ? (
            <Image source={{uri: user?.image_url}} style={styles.avatar} />
          ) : (
            <Text
              style={{
                color: STYLES.$COLORS.TERTIARY,
                fontSize: STYLES.$FONT_SIZES.XL,
                fontFamily: STYLES.$FONT_TYPES.SEMI_BOLD,
                paddingTop:
                  Platform.OS === 'ios' ? 3 : Platform.OS === 'android' ? 0 : 0,
              }}>
              {!!user?.name ? getNameInitials(user?.name) : ''}
            </Text>
          )}
        </TouchableOpacity>
      ),
    });
  };

  async function fetchData() {
    let payload = {
      user_unique_id: '0d6f9958-a2db-46aa-a4b1-c40d268b767b',
      user_name: 'Ankit Garg Prod',
      is_guest: false,
    };
    let res = await dispatch(initAPI(payload) as any);

    if (!!res) {
      await dispatch(
        profileData({
          community_id: res?.community?.id,
          member_id: res?.user?.id,
        }) as any,
      );
      setCommunityId(res.community.id);
      let payload = {
        page: 1,
      };
      await dispatch(getHomeFeedData(payload) as any);
    }

    return res;
  }

  useLayoutEffect(() => {
    fetchData();
  }, [navigation]);

  useEffect(() => {
    if (!!user) {
      setOptions();
    }
  }, [user]);

  async function updateData(newPage: number) {
    let payload = {
      page: newPage,
    };
    let response = await dispatch(updateHomeFeedData(payload, false) as any);
    return response;
  }

  const loadData = async (newPage: number) => {
    setIsLoading(true);
    setTimeout(async () => {
      const res = await updateData(newPage);
      if (!!res) {
        setIsLoading(false);
      }
    }, 1500);
  };

  const handleLoadMore = () => {
    if (!isLoading) {
      if (myChatrooms?.length > 0 && myChatrooms?.length % 10 === 0) {
        const newPage = page + 1;
        dispatch({type: SET_PAGE, body: newPage});
        loadData(newPage);
      }
    }
  };

  const renderFooter = () => {
    return isLoading ? (
      <View style={{paddingVertical: 20}}>
        <ActivityIndicator size="large" color={STYLES.$COLORS.SECONDARY} />
      </View>
    ) : null;
  };

  useEffect(() => {
    const query = ref(db, `/community/${communityId}`);
    return onValue(query, snapshot => {
      if (snapshot.exists()) {
        dispatch(getHomeFeedData({page: 1}, false) as any);
      }
    });
  }, []);
  return (
    <View style={styles.page}>
      {myChatrooms?.length > 0 && (
        <FlatList
          data={myChatrooms}
          ListHeaderComponent={() => (
            <HomeFeedExplore
              newCount={unseenCount}
              totalCount={totalCount}
              navigation={navigation}
            />
          )}
          renderItem={({item}: any) => {
            const homeFeedProps = {
              title: item?.chatroom?.header!,
              avatar: item?.chatroom?.chatroom_image_url!,
              lastMessage: item?.last_conversation?.answer!,
              lastMessageUser: item?.last_conversation?.member?.name!,
              time: item?.last_conversation_time!,
              unreadCount: item?.unseen_conversation_count!,
              pinned: false,
              lastConversation: item?.last_conversation!,
              lastConvoMember: item?.last_conversation?.member?.name!,
              chatroomID: item?.chatroom?.id!,
              isSecret: item?.chatroom?.is_secret,
              deletedBy: item?.last_conversation?.deleted_by,
            };
            return <HomeFeedItem {...homeFeedProps} navigation={navigation} />;
          }}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
          keyExtractor={(item: any) => item?.chatroom?.id.toString()}
        />
      )}
    </View>
  );
};

export default HomeFeed;
