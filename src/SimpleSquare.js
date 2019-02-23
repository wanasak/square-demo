import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';

export default function SimpleSquare({ size, color }) {
  const sizePx = `${size}px`;
  const style = {
    width: sizePx,
    height: sizePx,
    backgroundColor: color
  };

  return <div style={style} className="Square" />;
}

SimpleSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number.isRequired
};

SimpleSquare.defaultProps = {
  color: 'yellow'
};
