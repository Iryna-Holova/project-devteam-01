import { Icon, Title, Text } from './NotFound.styled';
import sprite from '../../assets/images.svg';
import MainTitle from 'components/MainTitle/MainTitle';

const NotFoundPage = () => {
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

export default NotFoundPage;
