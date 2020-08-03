import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import styled from "styled-components";

const TitleDiv = styled.div`
  position: relative;
  color: #ffffff;
  margin-top: 5em;
  text-align: center;
  text-transform: uppercase;
`;

const Title = styled.h1`
  font-size: 5em;
  font-weight: 700;
  margin-bottom: 0px;
`;

const TitleBack = styled.div`
  position: absolute;
  left: 42%;
  background-color: #ea1e63;
  height: 6em;
  width: 16%;
  z-index: -1;
`;
const Body = styled.div`
  margin: 2em 0;
  padding: 2em 9em 1em 9em;
  background-color: #100c2d;
  color: #ffffff;
  width: 100%;
  text-align: center;
  font-size: 1.5em;
`;

const IndexPage = () => (
  <Layout>
    <TitleDiv>
      <TitleBack />
      <Title>About</Title>
    </TitleDiv>
    <Body>
      <p>
        My name is Nathaniel Okenwa, and I am a Developer Evangelist at{" "}
        <a href="twilio.com">Twilio</a>, where I serve developers from
        theJavascript community in the UK and the rest of Europe.
      </p>
      <p>
        I am an experienced event organiser, technical educator and front-end
        developer.
      </p>
      <p>
        I am a die hard fan of JavaScript, sports, superheroes and mixed martial
        arts. My life goals are to have Batman's brains, Deadpool's humour,
        T'Challa's fashion sense, Killmonger's Wokeness, and Thanos'
        determination!
      </p>
    </Body>
  </Layout>
);

export default IndexPage;
