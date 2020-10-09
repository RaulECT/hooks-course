import React from "react";
import { css } from "@emotion/core";

import Button from "./Button";

function Login() {

	return (
		<section 
			css={css`
      background-color: #EAE2B7;
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;

      .form-section {
        background-color: #FCBF49;
        width: 35rem;
        -webkit-box-shadow: 10px 10px 12px -12px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 12px -12px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 12px -12px rgba(0,0,0,0.75);
        border-radius: 3px;
        padding: 1.5rem 0;

        h1 {
          text-align: center;
          color: #003049;
          margin-bottom: 2rem;
        }

        form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        input {
          padding: 0.5rem 0.8rem;
          background: transparent;
          border: none;
          border-bottom: solid 2px #003049;
          color: #003049;
          -webkit-transition: all .3s;
          transition: all .3s;
          min-width: 30rem;

          :not( :last-child ) {
            margin-bottom: 1rem;
          }

          ::placeholder {
            color: rgba(0, 48, 73, 0.3);
          }

          :focus {
            border-bottom: solid 2px #F77F00;
            outline: none;
          }
        }
      }
    `}>
			<div className="form-section">
				<h1>Log in</h1>

				<form>
					<input 
						placeholder="Email"
					/>
					
					<input 
						placeholder="Password"
						type="password"
					/>

					<Button>
            Log in
					</Button>
				</form>
			</div>			
		</section>
	);
}

export default Login;