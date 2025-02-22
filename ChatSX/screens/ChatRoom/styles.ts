import {Platform, StyleSheet} from 'react-native';
import STYLES from '../../constants/Styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  headingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginTop: Platform.OS === 'ios' ? -5 : 0,
  },
  selectedHeadingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
  },
  backBtn: {height: 40, width: 40, borderRadius: 10, resizeMode: 'contain'},
  selectedBackBtn: {height: 20, width: 20, resizeMode: 'contain'},
  threeDots: {
    height: 20,
    width: 30,
    resizeMode: 'contain',
  },
  editIcon: {
    height: 25,
    width: 30,
    resizeMode: 'contain',
  },
  chatRoomInfo: {gap: 5},

  inputContainer: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  emojiButton: {
    padding: 10,
  },
  emoji: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    tintColor: STYLES.$COLORS.SECONDARY,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  disabledInput: {
    marginVertical: Platform.OS === 'android' ? 10 : 20,
    marginHorizontal: 10,
    paddingVertical: 10,
    minHeight: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    justifyContent: 'center',
    borderColor: STYLES.$COLORS.MSG,
    borderWidth: 1,
  },
  disabledInputText: {
    fontSize: STYLES.$FONT_SIZES.MEDIUM,
    fontFamily: STYLES.$FONT_TYPES.MEDIUM,
    color: STYLES.$COLORS.MSG,
  },
  sendButton: {
    padding: 10,
    backgroundColor: '#4caf50',
    borderRadius: 5,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  emojiPicker: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    padding: 10,
  },

  centeredView: {
    flex: 1,
  },
  emojiCenteredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    position: 'absolute',
    right: 10,
    marginLeft: 10,
    marginTop: Platform.OS === 'ios' ? 45 : 10,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    padding: 5,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  reactionCenteredView: {
    flex: 1,
    alignItems: 'center',
  },
  reactionModalView: {
    marginTop: Platform.OS === 'ios' ? 45 : 10,
    backgroundColor: 'white',
    borderRadius: 8,
    // width: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    padding: 5,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  emojiModalView: {
    // marginTop: Platform.OS === 'ios' ? 45 : 10,
  },
  reactionFiltersView: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  filtersView: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  filterText: {
    fontSize: STYLES.$FONT_SIZES.LARGE,
    fontFamily: STYLES.$FONT_TYPES.LIGHT,
    color: STYLES.$COLORS.PRIMARY,
  },
  statusMessage: {
    padding: 10,
    maxWidth: '80%',
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: STYLES.$COLORS.JOINED_BTN,
  },
  joinBtnContainer: {
    backgroundColor: STYLES.$COLORS.SECONDARY,
    borderRadius: 10,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    gap: 5,
  },
  join: {
    color: STYLES.$COLORS.TERTIARY,
    fontSize: STYLES.$FONT_SIZES.LARGE,
    fontFamily: STYLES.$FONT_TYPES.SEMI_BOLD,
  },
  icon: {
    width: 30,
    height: 25,
    resizeMode: 'contain',
    borderRadius: STYLES.$AVATAR.BORDER_RADIUS,
  },
  inviteText: {
    fontSize: STYLES.$FONT_SIZES.MEDIUM,
    fontFamily: STYLES.$FONT_TYPES.MEDIUM,
    color: STYLES.$COLORS.MSG,
    lineHeight: 20,
  },
  inviteBtnText: {
    fontSize: STYLES.$FONT_SIZES.MEDIUM,
    fontFamily: STYLES.$FONT_TYPES.MEDIUM,
    color: STYLES.$COLORS.PRIMARY,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: STYLES.$AVATAR.BORDER_RADIUS,
    marginRight: STYLES.$MARGINS.SMALL,
  },
  alignRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  profile: {
    width: 45,
    height: 45,
    borderRadius: STYLES.$AVATAR.BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  headerRight: {
    marginTop: Platform.OS === 'ios' ? -5 : 0,
  },
  requestMessageTextButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    flexGrow: 1,
  },
  dmRequestView: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: STYLES.$COLORS.TERTIARY,
    marginTop: 10,
  },
  dmRequestButtonBox: {marginTop: 30, gap: 20},
});
