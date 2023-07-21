import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectStatus,
  selectError,
  selectIsError,
} from 'redux/auth/selectors';

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const isError = useSelector(selectIsError);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    status,
    error,
    isError,
  };
};

export default useAuth;
