// == Import
import './header.scss';
import Navbar from 'src/components/Navbar';

// == Composant
function Header() {
  // $(document).ready(function(){
  //   var mouseX, mouseY;
  //   var ww = $( window ).width();
  //   var wh = $( window ).height();
  //   var traX, traY;
  //   $(document).mousemove(function(e){
  //     mouseX = e.pageX;
  //     mouseY = e.pageY;
  //     traX = ((4 * mouseX) / 570) + 40;
  //     traY = ((4 * mouseY) / 570) + 50;
  //     console.log(traX);
  //     $(".title").css({"background-position": traX + "%" + traY + "%"});
  //   });
  // });
  // document.querySelector(document).ready(function(){
  //   let mouseX, mouseY;
  //   let ww = document.querySelector( window ).width();
  //   let wh = document.querySelector( window ).height();
  //   let traX, traY;
  //   document.querySelector(document).mousemove(function(e){
  //     mouseX = e.pageX;
  //     mouseY = e.pageY;
  //     traX = ((4 * mouseX) / 570) + 40;
  //     traY = ((4 * mouseY) / 570) + 50;
  //     console.log(traX);
  //     document.querySelector(".title") .css ({"background-position": traX + "%" + traY + "%"});
  //   });
  // });
  return (
    <div className="header">
      <div className="title">Spectacles solidaires</div>
      <Navbar />
    </div>
  );
}

// == Export
export default Header;
