import React from "react";
import Wrapper from "../layout/wrapper";
import Preview from "./preview";
import Home from "../components/home/Home";

const MainRoot = () => {
  return (
    <Wrapper>
      {/* <Preview /> */}
      <Home/>
    </Wrapper>
  );
};

export default MainRoot;
