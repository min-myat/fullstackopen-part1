import React from 'react';

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick} className="btn">
        {props.name}
      </button>
    </>
  );
};

export default Button;
