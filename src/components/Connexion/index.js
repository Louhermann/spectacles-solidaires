import Login from './Login';
import LoginMobile from './LoginMobile';

import useWindowSize from '../Slider/size';

// == Composant
function Connexion() {
  const size = useWindowSize();

  const isMobile = size.width < 767;

  return (
    isMobile ? <LoginMobile /> : <Login />

  );
}

// == Export
export default Connexion;
