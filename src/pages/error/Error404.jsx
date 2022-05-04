import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import styled from "styled-components";
import errimg from "../../Image/404.png";

const Image404 = styled.img`
  height: 100vh;
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
