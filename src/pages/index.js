import * as React from "react";
import MainLayout from "../layouts/Main";
import Home from "../modules/Home";

const IndexPage = () => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
};

export default IndexPage;

export const Head = () => <title>arazaki.dev - home</title>;
