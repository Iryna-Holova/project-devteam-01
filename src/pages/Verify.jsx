import useAuth from 'hooks/use-auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { verifyUser } from 'redux/auth/operations';

const Verify = () => {
  const { verificationToken } = useParams();
  const { isLoggedIn } = useAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('start verification', verificationToken,isLoggedIn);
    if (isLoggedIn) return;
    dispatch(verifyUser(verificationToken));
  }, [dispatch, verificationToken,isLoggedIn]);

  return isLoggedIn ? <Navigate to="/" /> : <Navigate to="/start" />;
};
export default Verify;
