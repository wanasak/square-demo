import React from 'react';

// Higher Order Component
export default function Hideable(Component) {
  return props => {
    const ownProps = { ...props };
    // Remove only own props and pass through the rest
    delete ownProps.isHidden;
    const style = {
      display: props.isHidden ? 'none' : 'block'
    };
    return (
      <div style={style}>
        <Component {...ownProps} />
      </div>
    );
  };
}
