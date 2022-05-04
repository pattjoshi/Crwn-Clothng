import React from "react";
import { NavLink } from "react-router-dom";

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

const NavLin = styled(NavLink)`
  font-size: 2.2rem;
  text-transform: uppercase;
  display: block;
  font-weight: 700;
  letter-spacing: 0.1rem;
  margin-bottom: 1rem;
  line-height: 1.15;
  color: green;
  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
    padding: 10px;
  }
`;

const Error404 = () => {
  return (
    <>
      <Image404 src={errimg} alt="404 error img" />

      <NavLin to="/">GO BACK !!</NavLin>
    </>
  );
};

export default Error404;
