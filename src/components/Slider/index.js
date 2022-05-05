// == npm
import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
// import uuidv4 from "uuid";
// import {v4 as uuid} from "uuid"; 
import { config } from "react-spring";

// == Import
import './slider.scss';

// == Image
import image0 from '../../assets/images/Aliko/Aliko.jpg';
import image1 from '../../assets/images/Artichocolat/Artichocolat.jpg';
import image2 from '../../assets/images/La note magique/La_note_magique.jpg';
import image3 from '../../assets/images/Le murmure de la mer/Le_murmure_de_la_mer.jpg';
import image4 from '../../assets/images/Les défis et Enigmes/Les_défis.jpg';
import image5 from '../../assets/images/Les Experiences Spectaculaires/Les_expériences_S.jpg';
import image6 from '../../assets/images/Les Mains Bavardeuses/Les_mains_Bavardeuses.jpg';
import image7 from '../../assets/images/Badou/Badou.jpg';
import image8 from '../../assets/images/Les repriseuses de l_ouest/Les repriseuses.jpg';
import image9 from '../../assets/images/Nekolo/Nekolo.jpg';
import image10 from '../../assets/images/Petite ombre/Petite_ombre.jpg';
import image11 from '../../assets/images/Sur le port de chine/Sur_le_port.jpg';

export default class Slider extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  };

  slides = [
    {
      // key: uuidv4(),
      content: <img src={image0} alt="1" />
    },
    {
      // key: uuidv4(),
      content: <img src={image1} alt="2" />
    },
    {
      // key: uuidv4(),
      content: <img src={image2} alt="3" />
    },
    {
      // key: uuidv4(),
      content: <img src={image3} alt="4" />
    },
    {
      // key: uuidv4(),
      content: <img src={image4} alt="5" />
    },
    {
      // key: uuidv4(),
      content: <img src={image5} alt="6" />
    },
    {
      // key: uuidv4(),
      content: <img src={image6} alt="7" />
    },
    {
      // key: uuidv4(),
      content: <img src={image8} alt="8" />
    },
    {
      // key: uuidv4(),
      content: <img src={image9} alt="9" />
    },
    {
      // key: uuidv4(),
      content: <img src={image10} alt="10" />
    },
    {
      // key: uuidv4(),
      content: <img src={image11} alt="11" />
    },
    {
      // key: uuidv4(),
      content: <img src={image7} alt="12" />
    },
    {
      // key: uuidv4(),
      content: <img src={image7} alt="13" />
    },
    {
      // key: uuidv4(),
      content: <img src={image7} alt="8" />
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          <div>
            <label>Go to slide: </label>
            <input name="goToSlide" onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Offset Radius: </label>
            <input name="offsetRadius" onChange={this.onChangeInput} />
          </div>
          {/* <div>
            <label>Show navigation: </label>
            <input
              type="checkbox"
              checked={this.state.showNavigation}
              name="showNavigation"
              onChange={e => {
                this.setState({ showNavigation: e.target.checked });
              }}
            />
          </div> */}
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.gentle });
              }}
              disabled={this.state.config === config.gentle}
            >
              Gentle Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.slow });
              }}
              disabled={this.state.config === config.slow}
            >
              Slow Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.wobbly });
              }}
              disabled={this.state.config === config.wobbly}
            >
              Wobbly Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.stiff });
              }}
              disabled={this.state.config === config.stiff}
            >
              Stiff Transition
            </button>
          </div>
        </div>
      </div>
    );
  }
}


// == Export
// export default Slider;
