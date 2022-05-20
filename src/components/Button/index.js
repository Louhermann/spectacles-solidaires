import { useState } from 'react';
import ParticleEffectButton from 'react-particle-effect-button';
import './button.scss';

function Button() {
  const [hidden, setHidden] = useState(false);
  const toggleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <Fragment>
    <ParticleEffectButton 
      color="#121019" 
      hidden={hidden}>
      <button
        style={{
          background: '#121019',
          color: '#fff',
          padding: '1.5rem 3rem',
          border: '0',
          borderRadius: 5,
          cursor: 'pointer',
          fontSize: '1.2em',
        }}
      onClick={toggleHidden}
   >
En savoir plus sur notre concept solidaire
    </button>
  </ParticleEffectButton>
  </Fragment>
);
}

export default Button;
