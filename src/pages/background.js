import * as React from "react";
import MainLayout from "../layouts/Main";
import Background from "../modules/Background";

const BackgroundPage = () => {
  return (
    <MainLayout>
      <Background />
    </MainLayout>
  );
};

export default BackgroundPage;

export const Head = () => <title>arazaki.dev - my preferences</title>;
