import React from 'react';
import Loading from '../../components/message/Loading';
import { useSelector} from 'react-redux';
import icon from '../../icon'

const MyLoading= () => {
  const { loadingProps } = useSelector(state => state.message);
  const props = Object.assign({icon : icon.loading}, loadingProps) ;
  return <Loading {...props}/>;
}

export default React.memo(MyLoading);