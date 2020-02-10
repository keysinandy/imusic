import React from 'react';
import Message from '../../components/message/Message';
import { useSelector} from 'react-redux'

const MyMessage = () => {
  const { messageProps } = useSelector(state => state.message);
  return <Message {...messageProps}/>;
}

export default React.memo(MyMessage);