import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import styled from "styled-components";
import errimg from "../../Image/404.png";

const Image404 = styled.img`
  height: 50%;
  width: 50%;
  display: flex;
  text-align: center;
  display: block;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
    height: 70%;
    width: 70%;
    padding: 10px;
    align-items: center;
    margin-bottom: 20px;
  }
`;

const Error404 = () => {
  return (
    <>
      <div>
        <Image404 src={errimg} alt="404 error img" />
      </div>
      <NavLink to="/">GO BACK</NavLink>
    </>
  );
};

export default Error404;
