import React from "react";
import PropTypes from "prop-types";

function Button({ children, onClick, className }) {
  return (
    <button className={`btn foo bar`} onClick={onClick}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: "",
};

Button.propTypes = {
  children: PropTypes.any,
};

export default Button;
