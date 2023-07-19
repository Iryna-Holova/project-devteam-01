import { Image, Text, Title } from 'components/NotFoundPage/NotFound.styled';

import image from '../assets/svg/not-found-page.svg'
import MainTitle from 'components/MainTitle/MainTitle';

const NotFound = () => {
  return (
    <>
      <MainTitle className="transparent">Not Found</MainTitle>
      <div style={{ textAlign: 'center' }}>
        <Image src = {image} alt="not found page"/>
        <Title>We are sorry,</Title>
        <Text>but the page you were looking for can’t be found...</Text>
      </div>
    </>
  );
};

export default NotFound;
