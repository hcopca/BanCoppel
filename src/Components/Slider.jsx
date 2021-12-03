import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ActiveBtn from "../Assets/circular_active.svg";
// import DisableBtn from "../Assets/circular_disabled.svg";
import styled from "styled-components";
import Container from "./Container";

const StylesCarousel = styled.div`
  background: var(--light-blue);
  padding: 50px 0;

  display: none;

  .bancoppel_slider {
    margin: auto;
    margin-top: 0;
    max-width: 1230px;
    .slide {
      flex: 1;

      .container {
        width: 90%;
        margin: auto;
        height: 100%;
      }
    }
    .carousel .control-next.control-arrow:before {
      content: "";
      border: solid transparent;
      padding: 18px;
      background-image: url(${ActiveBtn});
      background-repeat: no-repeat;
      background-size: contain;
    }

    .carousel .control-prev.control-arrow:before {
      content: "";
      border: solid transparent;
      padding: 18px;
      background-image: url(${ActiveBtn});
      background-repeat: no-repeat;
      background-size: contain;
      transform: rotate(135deg);
      -webkit-transform: rotate(180deg);
    }
  }

  .carousel.carousel-slider .control-arrow:hover {
    background: rgba(0, 0, 0, 0) !important;
  }
  .carousel.carousel-slider .control-arrow {
    height: 30px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 992px) {
    padding: 63px 0px 44px 0; //Padding de la card en te interesa
    display: block;
  }

  @media (min-width: 1200px) {
    .bancoppel_slider {
      .slide {
        .container {
          width: 100%;
        }
      }
    }
  }
  @media (min-width: 1400px) {
    padding: 63px 0px 50px 63px;
  }
`;

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  componentDidUpdate() {
    if (this.props.items.length === 1 && this.state.currentSlide !== 0) {
      this.setState({
        currentSlide: 0,
      });
    }
  }

  updateCurrentSlide = (idx) => {
    this.setState({
      currentSlide: idx,
    });
  };

  render() {
    return (
      <StylesCarousel
        showHeader={this.state.mostrarEncabezado}
        className="bancoppel__slider"
      >
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          className={`bancoppel_slider ${
            this.props.className ? this.props.className : ""
          }`}
          onChange={(e) => this.updateCurrentSlide(e)}
          selectedItem={this.state.currentSlide}
        >
          {this.props.items.map((item, idx) => {
            return (
              <div className="slide" key={idx}>
                <Container>{this.props.body(item, true)}</Container>
              </div>
            );
          })}
        </Carousel>
      </StylesCarousel>
    );
  }
}

export default Slider;
