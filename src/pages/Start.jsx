import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <>
      <h1>Start page</h1>
      <nav>
        <Link to="/register">Registration</Link>
        <Link to="/signin">Sign in</Link>
      </nav>
    </>
  );
};

export default Start;
