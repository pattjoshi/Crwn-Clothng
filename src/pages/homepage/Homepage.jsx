import React from "react";
import Directory from "../../component/Directory/DirectoryComponent";

import { HomePageContainer } from "./HomepageStyles";

const HomePage = () => (
  // This is functonal component becouse i dont need lifecycle method yeat
  // adding styled-components, converted homepage
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;

// HomepageStyles.jsx
// replace all style in to css in js
