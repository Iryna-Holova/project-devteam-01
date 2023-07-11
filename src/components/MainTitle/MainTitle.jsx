import PropTypes from 'prop-types';
import Title from './Title.styled';

const MainTitle = ({ children }) => {
  return <Title>{children}</Title>;
};

MainTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTitle;
