import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";
import Resource from "../components/event-resource";

const EventInfo = styled.div`
  display: flex;
  margin: 3em auto 0 auto;
  padding: 2em;
  align-items: center;
  width: 70%;
  background: #ea1e63;
  color: white;
`;

const EventInfoText = styled.div`
  padding: 0 3em;
`;

const EventLogo = styled.img`
  display: inline-block;
  width: 10em;
  padding-right: 2em;
  margin: 0;
  border-right: solid 5px white;
`;

const WebsiteButton = styled.a`
  background: #1b1754;
  padding: 0.5em;
  color: white;
  text-decoration: none;
  transition: background-color 0.5s ease;

  :hover {
    background: white;
    color: #1b1754;
  }
`;
const ResourcesContainer = styled.div`
  background-color: #1b1754;
  margin: 0 auto;
  padding: 2em;
  width: 70%;
  color: white;
  text-align: center;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <EventInfo>
        <EventLogo src={frontmatter.imageUrl} />
        <EventInfoText>
          <h1 css="margin-bottom: 0.25em;">{frontmatter.title}</h1>
          <p>
            <strong>
              {frontmatter.startDate} - {frontmatter.endDate}
            </strong>
          </p>
          <WebsiteButton href={frontmatter.eventUrl}>
            Visit event Website
          </WebsiteButton>
        </EventInfoText>
      </EventInfo>
      <ResourcesContainer>
        <h1>Wanna learn more about Twilio??</h1>

        {/* Promo Code */}
        <FlexContainer>
          {frontmatter.promoCode.available && (
            <Resource
              title={`Sign up today to get ${frontmatter.promoCode.currency}${frontmatter.promoCode.amount} free credit!`}
              subtitle={" "}
            />
          )}
          {/* Challenge Info */}
          {frontmatter.challenges && (
            <Resource
              title={`We have a challenge for you`}
              subtitle={`
              Check it out here to win some prizes`}
            />
          )}
          {/* Demo Video */}
          {frontmatter.demoVideo.available && (
            <Resource
              title={`Wanna see how Twilio works?`}
              subtitle={`Here's a short demo showing you a tiny piece of the possibilities with Twilio`}
            />
          )}
        </FlexContainer>
      </ResourcesContainer>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        startDate(formatString: "DD MMM, YYYY")
        endDate(formatString: "DD MMM, YYYY")
        slug
        title
        imageUrl
        eventUrl
        promoCode {
          available
          currency
          amount
          code
        }
        challenges {
          challenge
          prize
        }
        demoVideo {
          available
          url
        }
      }
    }
  }
`;
