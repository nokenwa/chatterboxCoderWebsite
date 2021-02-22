import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 4em;
  font-weight: 700;
  color: white;
`;

const Subtitle = styled.h1`
  font-size: 2em;
  font-weight: 700;
  color: white;
`;

const TitleBack = styled.div`
  margin: 6em auto;
  height: 12em;
  width: 72%;
  background-color: #ea1e63;
  z-index: -1;
  text-align: center;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <TitleBack>
      <Title>Under Construction</Title>
      <Subtitle>I'm still working on my website. It'll be up soon</Subtitle>
    </TitleBack>
  </Layout>
);

export default NotFoundPage;
