import './constants';
import { DESKTOP, MOBILE, TABLET } from './constants';

export const getMedia = () => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    return MOBILE;
  } else if (
    window.matchMedia('(min-width: 768px) and (max-width: 1279px)').matches
  ) {
    return TABLET;
  } else {
    return DESKTOP;
  }
};

export default getMedia;
