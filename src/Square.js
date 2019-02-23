import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Square.css';

const getSubTitle = () => 'Function Title';

export default class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: this.props.initialColor,
      isHidden: false
    };
  }

  setCurrentColor(currentColor) {
    this.setState({
      currentColor
    });
  }

  toggleIsHidden() {
    this.setState(currentState => {
      return {
        isHidden: !currentState.isHidden
      };
    });
  }

  render() {
    let textInput;
    const title = 'Title';
    const size = `${this.props.size}px`;
    const style = {
      width: size,
      height: size,
      backgroundColor: this.state.currentColor,
      display: this.state.isHidden ? 'none' : 'block'
    };
    // const element = [<p>{title}</p>, <p>{title}</p>];
    return (
      <div className="SquareContainer">
        <div style={style} className="Square">
          {/* {element} */}
          <p>{title}</p>
          {this.props.showSubTitle ? <p>{getSubTitle()}</p> : null}
        </div>
        <div className="SquareControl">
          <input
            ref={element => (textInput = element)}
            type="text"
            placeholder="Color..."
          />
          <button
            onClick={() => {
              this.setCurrentColor(textInput.value);
            }}
          >
            OK
          </button>
          <button onClick={() => this.toggleIsHidden()}>{
            this.state.isHidden ? 'Show' : 'Hide'
          }</button>
          <div className="clear" />
        </div>
      </div>
    );
  }
}

Square.propTypes = {
  initialColor: PropTypes.string.isRequired,
  showSubTitle: PropTypes.bool,
  size: PropTypes.number.isRequired
};

Square.defaultProps = {
  initialColor: 'red',
  showSubTitle: true
};
