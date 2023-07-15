import { Icon, Title, Text } from './notFound.styled';
import sprite from '../../assets/symbol-defs.svg';
import MainTitle from 'components/MainTitle/MainTitle';

const NotFoundPage = () => {
  return (
    <>
      <MainTitle>Not Found</MainTitle>
      <div style={{ textAlign: 'center' }}>
        <Icon>
          <use href={sprite + '#icon-not-found-page'}></use>
        </Icon>
        <Title>We are sorry,</Title>
        <Text>but the page you were looking for can’t be found..</Text>
      </div>
    </>
  );
};

export default NotFoundPage;
