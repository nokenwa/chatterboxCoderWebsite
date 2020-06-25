import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import sexyAsFuck from "../images/saf.png";

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

const SocialLink = styled.a`
	display: inline-block;
	width: 2.5em;
	height: 2.5em;
	margin: 0 0.5em;
	padding: 0 0.3em;
	border-radius: 2.2em;
	background-color: #ea1e63;
`;

const Socials = styled.div`
	width: 100%;
`;

const GraphicImage = styled.img`
	position: absolute;
	bottom: 2em;
	right: 10em;
`;

const IndexPage = () => (
	<Layout>
		{/* <SEO title="Home" /> */}
		<TitleDiv>
			<TitleBack />
			<Title>Chatterbox Coder</Title>
			{/* LINE */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="60%"
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
			<Socials>
				<SocialLink
					href="https://www.twitch.tv/chatterboxcoder"
					title="twitch page"
				>
					<svg width="1.1em" height="100%" viewBox="0 0 2400 2800">
						<g>
							<g id="Layer_1-2">
								<path
									class="st0"
									d="M500,0L0,500v1800h600v500l500-500h400l900-900V0H500z M2200,1300l-400,400h-400l-350,350v-350H600V200h1600
					   V1300z"
									fill="#FFFFFF"
								/>
								<rect
									x="1700"
									y="550"
									class="st0"
									width="200"
									height="600"
									fill="#FFFFFF"
								/>
								<rect
									x="1150"
									y="550"
									class="st0"
									width="200"
									height="600"
									fill="#FFFFFF"
								/>
							</g>
						</g>
					</svg>
				</SocialLink>
				{/* Twitch */}
				<SocialLink
					href="https://twitter.com/chatterboxcoder"
					title="Twitter page"
				>
					<svg height="100%" width="100%" viewBox="0 0 400 400">
						<g id="Logo__x2014__FIXED">
							<g>
								<path
									class="st1"
									d="M153.6,301.6c94.3,0,145.9-78.2,145.9-145.9c0-2.2,0-4.4-0.1-6.6c10-7.2,18.7-16.3,25.6-26.6
			c-9.2,4.1-19.1,6.8-29.5,8.1c10.6-6.3,18.7-16.4,22.6-28.4c-9.9,5.9-20.9,10.1-32.6,12.4c-9.4-10-22.7-16.2-37.4-16.2
			c-28.3,0-51.3,23-51.3,51.3c0,4,0.5,7.9,1.3,11.7c-42.6-2.1-80.4-22.6-105.7-53.6c-4.4,7.6-6.9,16.4-6.9,25.8
			c0,17.8,9.1,33.5,22.8,42.7c-8.4-0.3-16.3-2.6-23.2-6.4c0,0.2,0,0.4,0,0.7c0,24.8,17.7,45.6,41.1,50.3c-4.3,1.2-8.8,1.8-13.5,1.8
			c-3.3,0-6.5-0.3-9.6-0.9c6.5,20.4,25.5,35.2,47.9,35.6c-17.6,13.8-39.7,22-63.7,22c-4.1,0-8.2-0.2-12.2-0.7
			C97.7,293.1,124.7,301.6,153.6,301.6"
									fill="#ffffff"
								/>
							</g>
						</g>
					</svg>
				</SocialLink>
				{/* Twitter */}
				<SocialLink
					href="https://www.instagram.com/chatterboxcoder/"
					title="instagram page"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="100%"
						viewBox="0 0 512 512.00006"
						width="1.2em"
					>
						<g>
							<path
								d="m261.039062 512c-1.695312 0-3.390624 0-5.097656-.007812-40.132812.097656-77.214844-.921876-113.277344-3.117188-33.0625-2.011719-63.242187-13.4375-87.28125-33.039062-23.195312-18.914063-39.035156-44.488282-47.078124-76.003907-7-27.4375-7.371094-54.371093-7.726563-80.421875-.257813-18.691406-.5234375-40.839844-.578125-63.363281.0546875-22.617187.320312-44.765625.578125-63.457031.355469-26.046875.726563-52.980469 7.726563-80.421875 8.042968-31.515625 23.882812-57.089844 47.078124-76.003907 24.039063-19.601562 54.21875-31.027343 87.285157-33.039062 36.0625-2.191406 73.152343-3.2148438 113.371093-3.1171875 40.144532-.0859375 77.214844.9257815 113.277344 3.1171875 33.0625 2.011719 63.242188 13.4375 87.28125 33.039062 23.199219 18.914063 39.035156 44.488282 47.078125 76.003907 7 27.4375 7.371094 54.375 7.726563 80.421875.257812 18.691406.527344 40.839844.578125 63.363281v.09375c-.050781 22.523437-.320313 44.671875-.578125 63.363281-.355469 26.046875-.722656 52.980469-7.726563 80.421875-8.042969 31.515625-23.878906 57.089844-47.078125 76.003907-24.039062 19.601562-54.21875 31.027343-87.28125 33.039062-34.535156 2.101562-70.011718 3.125-108.277344 3.125zm-5.097656-40.007812c39.480469.09375 75.730469-.902344 110.945313-3.042969 25-1.519531 46.675781-9.632813 64.433593-24.113281 16.414063-13.386719 27.71875-31.855469 33.597657-54.894532 5.828125-22.839844 6.164062-47.363281 6.488281-71.078125.253906-18.566406.519531-40.558593.574219-62.863281-.054688-22.308594-.320313-44.296875-.574219-62.863281-.324219-23.714844-.660156-48.238281-6.488281-71.082031-5.878907-23.039063-17.183594-41.507813-33.597657-54.894532-17.757812-14.476562-39.433593-22.589844-64.433593-24.109375-35.214844-2.144531-71.464844-3.132812-110.851563-3.046875-39.472656-.09375-75.726562.902344-110.941406 3.046875-25 1.519531-46.675781 9.632813-64.433594 24.109375-16.414062 13.386719-27.71875 31.855469-33.597656 54.894532-5.828125 22.84375-6.164062 47.363281-6.488281 71.082031-.253907 18.582031-.519531 40.585937-.574219 62.910156.054688 22.226563.320312 44.234375.574219 62.816406.324219 23.714844.660156 48.238281 6.488281 71.078125 5.878906 23.039063 17.183594 41.507813 33.597656 54.894532 17.757813 14.476562 39.433594 22.589843 64.433594 24.109374 35.214844 2.144532 71.476562 3.144532 110.847656 3.046876zm-.953125-90.992188c-68.921875 0-125-56.074219-125-125s56.078125-125 125-125c68.925781 0 125 56.074219 125 125s-56.074219 125-125 125zm0-210c-46.867187 0-85 38.132812-85 85s38.132813 85 85 85c46.871094 0 85-38.132812 85-85s-38.128906-85-85-85zm139-80c-16.566406 0-30 13.429688-30 30s13.433594 30 30 30c16.570313 0 30-13.429688 30-30s-13.429687-30-30-30zm0 0"
								data-original="#000000"
								class="active-path"
								data-old_color="#000000"
								fill="#FFFFFF"
							/>
						</g>{" "}
					</svg>
				</SocialLink>
				{/* Instagram */}
				<SocialLink href="https://github.com/nokenwa" title="github profile">
					<svg
						class="octicon octicon-mark-github v-align-middle"
						height="100%"
						viewBox="0 0 16 16"
						width="1.2em"
					>
						<path
							fill-rule="evenodd"
							d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
							fill="#FFFFFF"
						></path>
					</svg>
				</SocialLink>
				{/* Github */}
				<SocialLink
					href="https://www.linkedin.com/in/nathanielokenwa/"
					title="linkedIn profile"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-21 -35 682.66669 682"
						width="1.1em"
						height="100%"
					>
						<g>
							<path
								d="m77.613281-.667969c-46.929687 0-77.613281 30.816407-77.613281 71.320313 0 39.609375 29.769531 71.304687 75.8125 71.304687h.890625c47.847656 0 77.625-31.695312 77.625-71.304687-.894531-40.503906-29.777344-71.320313-76.714844-71.320313zm0 0"
								data-original="#000000"
								class="active-path"
								data-old_color="#000000"
								fill="#FFFFFF"
							/>
							<path
								d="m8.109375 198.3125h137.195313v412.757812h-137.195313zm0 0"
								data-original="#000000"
								class="active-path"
								data-old_color="#000000"
								fill="#FFFFFF"
							/>
							<path
								d="m482.054688 188.625c-74.011719 0-123.640626 69.546875-123.640626 69.546875v-59.859375h-137.199218v412.757812h137.191406v-230.5c0-12.339843.894531-24.660156 4.519531-33.484374 9.917969-24.640626 32.488281-50.167969 70.390625-50.167969 49.644532 0 69.5 37.851562 69.5 93.339843v220.8125h137.183594v-236.667968c0-126.78125-67.6875-185.777344-157.945312-185.777344zm0 0"
								data-original="#000000"
								class="active-path"
								data-old_color="#000000"
								fill="#FFFFFF"
							/>
						</g>
					</svg>
				</SocialLink>
				{/* Linked In */}
			</Socials>
		</TitleDiv>

		<GraphicImage src={sexyAsFuck} />
	</Layout>
);

export default IndexPage;
