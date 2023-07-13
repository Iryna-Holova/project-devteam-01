import { LIMITS } from './constants';
import getMedia from './index';

export const getPageLimit = page => {
  const media = getMedia();
  const limit = LIMITS[page][media];
  return limit;
};
