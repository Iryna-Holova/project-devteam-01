import { Icon, Text, Title } from 'components/NotFoundPage/NotFound.styled';
import sprite from '../../../assets/images.svg';
  
  export const Error = () => {
    return (
        <div style={{ textAlign: 'center' }}>
        <Icon>
          <use href={sprite + '#not-found-page'}></use>
        </Icon>
        <Title>We are sorry,</Title>
        <Text>there are no popular recipes now...</Text>
      </div>
    );
  };