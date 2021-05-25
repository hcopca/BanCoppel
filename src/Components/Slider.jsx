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

  .sections {
    display: flex;
    align-items: center;
    width: 80%;
    margin: auto;
    .section {
      padding-bottom: 20px;
      flex: 1;
      border-bottom: 2px solid var(--shadow-blue);
      cursor: pointer;
      h3 {
        text-align: center;
        color: var(--light-gray);
      }

      &:hover {
        border-bottom: 2px solid var(--yellow);
        h3 {
          text-align: center;
          color: var(--storm-blue);
        }
      }
    }

    .current {
      border-bottom: 2px solid var(--yellow);
      h3 {
        text-align: center;
        color: var(--storm-blue);
      }
    }
  }
  .bancoppel_slider {
    margin: auto;
    margin-top: 50px;
    max-width: 1250px;

    .slide {
      .container {
        width: 95%;
        margin: auto;
      }
    }
    .carousel .control-next.control-arrow:before {
      content: "";
      border: solid transparent;
      padding: 14px;
      background-image: url(${ActiveBtn});
      background-repeat: no-repeat;
      background-size: contain;
    }

    .carousel .control-prev.control-arrow:before {
      content: "";
      border: solid transparent;
      padding: 14px;
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
    display: block;
  }
`;

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { avaliableServices: this.props.services, currentSlide: 0 };
  }

  changeSlide(idx) {
    this.setState({
      currentSlide: idx,
    });
  }

  updateCurrentSlide = (idx) => {
    const { currentSlide } = this.state;

    if (currentSlide !== idx) {
      this.setState({
        currentSlide: idx,
      });
    }
  };

  render() {
    return (
      <StylesCarousel>
        <Container>
          <div className="sections">
            {this.props.items.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={`section ${
                    this.state.currentSlide === idx ? "current" : ""
                  }`}
                  onClick={() => this.changeSlide(idx)}
                >
                  <h3>{item.section}</h3>
                </div>
              );
            })}
          </div>
        </Container>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          className="bancoppel_slider"
          selectedItem={this.state.currentSlide}
          onChange={this.updateCurrentSlide}
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