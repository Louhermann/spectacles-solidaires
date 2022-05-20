import {useRef} from 'react';

// == Import
import './header.scss';
import Navbar from 'src/components/Navbar';
// import $ from 'jquery';

// == Composant
function Header() {
  $(document).ready(function(){
    var mouseX, mouseY;
    var ww = $( window ).width();
    var wh = $( window).height();
    var traX, traY;
    $(document).mousemove(function(e){
      mouseX = e.pageX;
      mouseY = e.pageY;
      traX = ((4 * mouseX) / 570) + 40;
      traY = ((4 * mouseY) / 570) + 50;
      $(".title").css({"background-position": traX + "%" + traY + "%"});
    });
  });
 
  return (
    <div className="header">
      <h1 className="title">Spectacles solidaires</h1>
      <Navbar />
    </div>
  );
}

// == Export
export default Header;
