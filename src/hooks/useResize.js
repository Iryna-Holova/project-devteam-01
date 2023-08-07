import { useEffect, useState } from 'react';

import getMedia from 'utils/getMedia';
const useResize = () => {
  const [currDevice, setCurrDevice] = useState(getMedia());
  useEffect(() => {
    const getCurrDevice = () => setCurrDevice(getMedia());
    getCurrDevice();
    window.addEventListener('resize', getCurrDevice);
    return () => window.removeEventListener('resize', getCurrDevice);
  }, []);
  return currDevice;
};
export default useResize;
