import { useSelector } from 'react-redux';
import { selectDevice, selectTheme } from 'redux/App/selectors';

const useApp = () => {
  const theme = useSelector(selectTheme);
  const device = useSelector(selectDevice);

  return {
    theme,
    device,
  };
};

export default useApp;
