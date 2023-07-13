import { LIMITS } from './constants';

export const getPageLimit = (page, media) => {
  const limit = LIMITS[page][media];
  return limit;
};

export default getPageLimit;
