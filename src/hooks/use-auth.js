import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectStatus,
} from 'redux/auth/selectors';

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const status = useSelector(selectStatus);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    status,
  };
};

export default useAuth;
