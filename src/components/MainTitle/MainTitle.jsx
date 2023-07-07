import PropTypes from 'prop-types';
import Title from './MainTitle.styled';

const MainTitle = ({ children }) => {
  return <Title>{children}</Title>;
};

MainTitle.propTypes = {
  message: PropTypes.node.isRequired,
};

export default MainTitle;
