import { Link } from 'react-router-dom';
import { WelcomeWords, Wrapper, InfoP,WrapperBut } from './StartPage.styled';

const StartPage = () => {
  return (
    <>
      <Wrapper>
        <WelcomeWords>Welcome to the app!</WelcomeWords>
        <InfoP>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </InfoP>
        <WrapperBut>
          <Link to="/register">
            <button>Registration</button>
          </Link>
          <Link to="/signin">
            <button>Sign in</button>
          </Link>
        </WrapperBut>
      </Wrapper>
    </>
  );
};

export default StartPage;
