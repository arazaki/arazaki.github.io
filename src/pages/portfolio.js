import * as React from "react";
import MainLayout from "../layouts/Main";
import Portofolio from "../modules/Portfolio";

const PortofolioPage = () => {
  return (
    <MainLayout>
      <Portofolio />
    </MainLayout>
  );
};

export default PortofolioPage;

export const Head = () => <title>arazaki.dev - portfolio</title>;
