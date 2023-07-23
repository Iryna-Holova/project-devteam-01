import { useNavigate } from 'react-router-dom';
import scrollToTop from 'utils/scroll-to-top';
import { LogoContainer, LogoImage } from './Logo.styled';
import sprite from '../../assets/sprite.svg';

const Logo = ({ className, handleCloseMenu, children }) => {
  const navigate = useNavigate();
  return (
    <LogoContainer
      onClick={() => {
        if (handleCloseMenu) handleCloseMenu();
        navigate(`/`);
        scrollToTop();
      }}
    >
      <LogoImage className={className}>
        <svg>
          <use href={sprite + '#logo'}></use>
        </svg>
      </LogoImage>
      {children}
    </LogoContainer>
  );
};

export default Logo;
