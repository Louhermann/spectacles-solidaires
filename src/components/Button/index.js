import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ParticleEffectButton from 'react-particle-effect-button';
import './button.scss';

function Button() {
  const navigate = useNavigate();
  const [hidden, setHidden] = useState(false);
  const toggleHidden = () => {
    setHidden(!hidden);
  };
  const GoTimeOut = () => {
    setHidden(!hidden);
    setTimeout(() => {
      navigate('/Apropos');
    }, 1200);
  };

    return (
    <ParticleEffectButton 
      color="#121019" 
      hidden={hidden}>
         {/* <NavLink to="Apropos" > */}
      <button 
         onClick={GoTimeOut}
        className="home_button"
        type='button'
    >
   En savoir plus sur notre concept solidaire
      </button>
    {/* </NavLink> */}
    </ParticleEffectButton>

);
}

export default Button;
