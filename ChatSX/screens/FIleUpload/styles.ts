import {Platform, StyleSheet} from 'react-native';
import STYLES from '../../constants/Styles';
import Layout from '../../constants/Layout';

const styles = StyleSheet.create({
  page: {flex: 1, flexDirection: 'column', backgroundColor: 'black'},
  headingContainer: {
    position: 'absolute',
    zIndex: 1,
    top: Platform.OS === 'ios' ? 60 : 20,
    left: 10,
  },
  backBtn: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: 'white',
    padding: 5,
  },
  mainImage: {
    height: Layout.window.height,
    width: Layout.window.width,
    resizeMode: 'contain',
    backgroundColor: 'black',
  },
  imageItem: {
    backgroundColor: 'black',
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    height: 50,
  },
  smallImage: {height: 40, width: 40, resizeMode: 'cover'},
  touchableBackButton: {
    padding: 10,
  },
  selectedFileToView: {flexGrow: 1, display: 'flex', justifyContent: 'center'},
  bottomBar: {position: 'absolute', bottom: 30},
  bottomListOfImages: {
    height: 50,
    alignSelf: 'flex-end',
    marginHorizontal: 10,
  },
  video: {
    display: 'flex',
    justifyContent: 'center',
    width: Layout.window.width,
    height: Layout.window.height / 1.6,
  },
  videoPlayer: {
    width: Layout.window.width,
    height: Layout.window.height / 1.6,
  },
  videoIcon: {height: 20, width: 20, resizeMode: 'contain', tintColor: 'white'},
});

export default styles;
