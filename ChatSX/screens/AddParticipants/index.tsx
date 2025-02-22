import React from 'react';
import CommonAllMembers from '../../components/CommonAllMembers';

const AddParticipants = ({navigation, route}: any) => {
  const {chatroomID} = route.params;
  return (
    <CommonAllMembers
      navigation={navigation}
      isDM={false}
      chatroomID={chatroomID}
    />
  );
};

export default AddParticipants;
