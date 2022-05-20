import Cards from './Card';
import Coverflow from './Coverflow';

import useWindowSize from './size';

function Slider() {
  const size = useWindowSize();

  const isMobile = size.width < 767;
  // console.log(size.width);
  // console.log(isMobile);

  return (
    isMobile ? <Cards /> : <Coverflow />
  );
}

export default Slider;
