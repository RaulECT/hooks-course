import React from "react";
import { css } from "@emotion/core";
import PropTypes from "prop-types";

function Button({ children }) {
	return (
		<button
			css={css`
      background: #D62828;
      color: #fff;
      border: none;
      padding: 1rem 2rem;
      font-weight: bold;
      border-radius: 3px;
      transition: all .3s;
      cursor: pointer;

      :hover {
        transform: scale(1.1);
      }

      :active {
        border: none;
        transform: scale(0.9);
      }

      :focus {
        outline: none;
      }
      `}
		>
			{children}
		</button>
	);
}

Button.propTypes = {
	children: PropTypes.string.isRequired
};

export default Button;