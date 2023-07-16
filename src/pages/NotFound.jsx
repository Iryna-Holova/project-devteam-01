import { Icon, Text, Title } from 'components/NotFoundPage/NotFound.styled';
import sprite from '../assets/images.svg';
import MainTitle from 'components/MainTitle/MainTitle';

const NotFound = () => {
  return (
    <>
      <MainTitle>Not Found</MainTitle>
      <div style={{ textAlign: 'center' }}>
        <Icon>
          <use href={sprite + '#not-found-page'}></use>
        </Icon>
        <Title>We are sorry,</Title>
        <Text>but the page you were looking for can’t be found..</Text>
      </div>
    </>
  );
};

export default NotFound;
