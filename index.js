/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import LikeMinds from 'likeminds-chat-rn-beta';

export const myClient = new LikeMinds({
  apiKey: '45c469dc-06e1-4f05-914e-dd02419eb53f',
  baseUrl: 'https://betaauth.likeminds.community',
  baseUrlCaravan: 'https://beta.likeminds.community',
});

AppRegistry.registerComponent(appName, () => App);
