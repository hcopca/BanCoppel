import React, { Component } from "react";
import Container from "./Container";
import styled from "styled-components";

const StyledSwitch = styled.div`
  background: var(--light-blue);
  padding: 50px 0;
  display: none;
  .sections {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-bottom: 50px;
    .section {
      padding-bottom: 20px;
      flex: 0 1 20%;
      border-bottom: 2px solid var(--shadow-blue);
      cursor: pointer;
      h3 {
        text-align: center;
        color: var(--light-gray);
        font-weight: bold;
        font-size: 14px;
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
  @media (min-width: 992px) {
    display: block;
  }
`;

class Switcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currenView: {
        section: null,
      },
    };
  }

  selectedView(view) {
    this.setState({
      currenView: view,
    });
  }

  componentDidMount() {
    this.setState({
      currenView: this.props.items[0],
    });
  }

  render() {
    return this.state.currenView ? (
      <StyledSwitch>
        <Container>
          <div className="sections">
            {this.props.items.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={`section ${
                    this.state.currenView.section === item.section
                      ? "current"
                      : ""
                  }`}
                  onClick={() => this.selectedView(item)}
                >
                  <h3>{item.section}</h3>
                </div>
              );
            })}
          </div>
          {this.props.body(this.state.currenView)}
        </Container>
      </StyledSwitch>
    ) : null;
  }
}

export default Switcher;
