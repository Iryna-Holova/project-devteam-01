import { Link } from 'react-router-dom';

import Logo from 'components/Logo/Logo';

import { InfoP, WelcomeWords, Wrapper, WrapperBut } from './Start.styled';

const Start = () => {
  return (
    <Wrapper>
      <Logo className={'start'} as='div' />
      <WelcomeWords>Welcome to the app!</WelcomeWords>
      <InfoP>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </InfoP>
      <WrapperBut>
        <Link to="/register" className="reg">
          Registration
        </Link>
        <Link to="/signin" className="signin">
          Sign in
        </Link>
      </WrapperBut>
    </Wrapper>
  );
};

export default Start;
