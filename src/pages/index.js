import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import styled from "styled-components";

const TitleDiv = styled.div`
	color: #ffffff;
	position: absolute;
	top: 25%;
	left: 0;
	width: 100%;
	text-align: center;
	text-transform: uppercase;
`;

const Title = styled.h1`
	font-size: 6em;
	font-weight: 700;
	margin-bottom: 0px;
`;

const Subtitle = styled.h2`
	margin-top: 5px;
	font-size: 2.3em;
	font-weight: 550;
`;

const TitleBack = styled.div`
	position: absolute;
	margin: auto;
	top: -0.5em;
	left: 0;
	right: 0;
	height: 12em;
	width: 72%;
	background-color: #ea1e63;
	z-index: -1;
`;
const IndexPage = () => (
	<Layout>
		{/* <SEO title="Home" /> */}
		<TitleDiv>
			<TitleBack />
			<Title>Chatterbox Coder</Title>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="920"
				height="4"
				viewBox="0 0 920 4"
				fill="none"
			>
				<path
					d="M0.963013 2.0001L458 2.00009L920 2.00009"
					stroke="#1E175A"
					stroke-width="4"
				/>
			</svg>
			<Subtitle>Nathaniel Okenwa</Subtitle>
		</TitleDiv>
	</Layout>
);

export default IndexPage;
