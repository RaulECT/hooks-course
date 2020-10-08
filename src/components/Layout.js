import React from "react";
import { Global, css } from "@emotion/core";
import PropTypes from "prop-types";

function Layout({ children }) {
	return (
		<>
			<Global
				styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }

        html,
        body {
          margin: 0;
          color: #555;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          font-size: 18px;
          line-height: 1.4;
      
          > div {
            margin-top: 0;
          }

          .d-test {
            background: #fff !important;
            color: #ffffff !important;
          }

          .ant-select-item ant-select-item-option {
            color: #fff !important;
          }
          
          .a-test {
            background: #000000 !important;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;
            margin-bottom: 0;

            + * {
              margin-top: 0.5rem;
            }
          }

          p {
            margin-bottom: 0;
          }

          button {
            line-height: normal;
          }

          strong {
            color: #222;
          }

          figure {
            margin: 0;
          }

          li {
            margin-top: 0.25rem;
          }
        }
      `}
			/>

			<main>
				{children}
			</main>
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.object.isRequired
};

export default Layout;