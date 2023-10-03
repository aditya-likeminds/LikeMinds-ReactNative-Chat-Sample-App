import {myClient} from '../../..';
import {PATH_REGEX, QUERY_REGEX, VALID_URI_REGEX} from '../../constants/Regex';
import {initAPI} from '../../store/actions/homefeed';

interface DeepLinkRequest {
  uri: string;
  userName: string;
  uuid: string;
  isGuest: boolean;
}

interface DeepLinkResponse {
  success: boolean;
  errorMessage?: string;
}

// this function is to check URI is valid or not
function isValidURI(uri: string): boolean {
  const regex = VALID_URI_REGEX;
  return regex.test(uri);
}

// this function is to parse deep link url
async function parseDeepLink(
  request: DeepLinkRequest,
  responseCallback?: (response: DeepLinkResponse) => void,
) {
  const uri = request.uri;

  if (isValidURI(uri)) {
    const pathRegex = PATH_REGEX;
    const matches = uri.match(pathRegex);

    const path = matches ? matches[1] : null;

    if (path === '/chatroom') {
      let regexToExtractParams: RegExp = QUERY_REGEX;
      let params: Record<string, string> = {};
      let match: RegExpExecArray | null;

      while ((match = regexToExtractParams.exec(uri))) {
        params[match[1]] = match[2];
      }

      let chatroomId = params?.chatroom_id;

      if (chatroomId) {
        const internalRoute = `route://collabcard?collabcard_id=${chatroomId}`;

        let initiateUserRequest = {
          userName: request?.userName,
          uuid: request?.uuid,
          isGuest: false,
        };
        const success = await myClient.initiateUser(initiateUserRequest);

        if (success) {
          // TODO -- Redirect to internalRoute
          responseCallback?.({success: true});
          return;
        } else {
          responseCallback?.({
            success: false,
            errorMessage: 'URI parsing failed. Please try after some time',
          });
          return;
        }
      } else {
        responseCallback?.({
          success: false,
          errorMessage: 'URI not supported',
        });
        return;
      }
    } else {
      responseCallback?.({
        success: false,
        errorMessage: 'URI not supported',
      });
      return;
    }
  } else {
    responseCallback?.({success: false, errorMessage: 'URI not supported'});
    return;
  }
}

// Example usage
const exampleRequest: DeepLinkRequest = {
  uri: 'https://dummyurl.com/chatroom?chatroom_id=12345',
  userName: 'John Doe',
  uuid: '123456',
  isGuest: false,
};

// Example usage to call parseDeepLink() method
export function callParseDeepLink() {
  parseDeepLink(exampleRequest, response => {
    // Parsed response
  });
}
