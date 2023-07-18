import { useNavigate } from 'react-router-dom';
import scrollToTop from 'utils/scroll-to-top';
import { LogoContainer, LogoImage } from './Logo.styled';

const Logo = ({ className }) => {
  const navigate = useNavigate();
  return (
    <LogoContainer
      onClick={() => {
        navigate(`/`);
        scrollToTop();
      }}
    >
      <LogoImage>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M2.79883 2.89566V7.98571V8.08837V7.98571C2.79883 9.43903 3.43295 10.7258 4.41613 11.5585C4.89685 11.9658 5.21451 12.5156 5.21451 13.1259V21.6223C5.21451 22.5668 6.02618 23.3334 7.02628 23.3334C8.02637 23.3334 8.83804 22.5668 8.83804 21.6223V13.1259C8.83804 12.5156 9.15571 11.9658 9.63643 11.5585C10.6196 10.7258 11.2537 9.43903 11.2537 7.98571V2.89566V7.98571"
            stroke="#FAFAFA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.02539 8.50376V2.79999"
            stroke="#FAFAFA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M23.3322 3.99973C23.3322 3.37004 22.7911 2.85898 22.1243 2.85898H20.9165C18.9151 2.85898 17.293 4.39101 17.293 6.28124V13.1258C17.293 14.6133 18.3039 15.867 19.7087 16.3381V21.6221C19.7087 22.5667 20.5203 23.3332 21.5204 23.3332C22.5205 23.3332 23.3322 22.5667 23.3322 21.6221V16.548V3.99973Z"
            stroke="#FAFAFA"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </LogoImage>
    </LogoContainer>
  );
};

export default Logo;
