// styles
import './error404.scss';

function Error404() {
  return (
    <div className="error404">
      <div className="text"><p>404</p></div>
      <div className="error_container">
        {/* <!-- caveman left --> */}
        <div className="caveman">
          <div className="leg">
            <div className="foot"><div className="fingers" /></div>
          </div>
          <div className="leg">
            <div className="foot"><div className="fingers" /></div>
          </div>
          <div className="shape">
            <div className="circle" />
            <div className="circle" />
          </div>
          <div className="head">
            <div className="eye"><div className="nose" /></div>
            <div className="mouth" />
          </div>
          <div className="arm-right"><div className="club" /></div>
        </div>
        {/* <!-- caveman right --> */}
        <div className="caveman">
          <div className="leg">
            <div className="foot"><div className="fingers" /></div>
          </div>
          <div className="leg">
            <div className="foot"><div className="fingers" /></div>
          </div>
          <div className="shape">
            <div className="circle" />
            <div className="circle" />
          </div>
          <div className="head">
            <div className="eye"><div className="nose" /></div>
            <div className="mouth" />
          </div>
          <div className="arm-right"><div className="club" /></div>
        </div>
        <div className="error-message">
          <p>Désolé, la page web est introuvable</p>
        </div>
      </div>
      {/* <!-- //////////////// CREDIT //////////////// --> */}
      {/* <a href="https://codepen.io/SofiaSergio/" target="_blank" rel="noreferrer">
        <div id="link">
          <i className="fab fa-codepen" />
          <p>watch other pens</p>
        </div>
      </a> */}
    </div>
  );
}

export default Error404;
