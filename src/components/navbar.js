import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import chatterboxLogo from "../images/chatterboxLogo.png";

const HeaderBar = styled.header`
	position: fixed;
	top: 0;
	width: 100%;
	height: 4.5em;
	background-color: #1b1754;
`;
const NavMenu = styled.ul`
	position: absolute;
	right: 0;
	padding: 1.4em;
	list-style-type: none;
`;
const NavItem = styled.li`
	display: inline-block;
`;
const StyledLink = styled(Link)`
	color: #ffffff;
	margin: 0 1em;
	padding: 0.4em 1em;
	text-transform: uppercase;
	text-decoration: none;
	text-align: center;
	font-weight: 550;
`;

const Logo = styled.img`
	position: absolute;
	display: inline-block;
	height: 3.5em;
	margin: 0.5em 1em;
	clip-path: circle(1.7em at center);
`;

const activeLink = {
	backgroundColor: "#EA1E63",
};

export default function Navbar() {
	return (
		<HeaderBar>
			<Logo
				src={chatterboxLogo}
				alt="Cartoon recreation of Nathaniel Okenwa's face"
			/>
			<nav>
				<NavMenu>
					<NavItem>
						<StyledLink to="/" activeStyle={activeLink}>
							Home
						</StyledLink>
					</NavItem>
					<NavItem>
						<StyledLink to="/about">About</StyledLink>
					</NavItem>
					<NavItem>
						<StyledLink to="/media">Media</StyledLink>
					</NavItem>
					<NavItem>
						<StyledLink to="/events">Events</StyledLink>
					</NavItem>
					<NavItem>
						<StyledLink to="/blog">Blog</StyledLink>
					</NavItem>
					<NavItem>
						<StyledLink to="/contact">Contact</StyledLink>
					</NavItem>
				</NavMenu>
			</nav>
		</HeaderBar>
	);
}
