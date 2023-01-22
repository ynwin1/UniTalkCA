
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import colors from '../../utils/style/colors'
import React, {useState} from 'react'
import waterloo from  '../../assets/waterloo.png'
import ubc from  '../../assets/ubc.png'
import tru from  '../../assets/tru.png'
import {Breadcrumb} from "react-bootstrap";
import Post from "../Post";

const HomeHeader = styled.header`
		width: 95%;
		margin: auto;
		margin-top: 25px;
		height: 75px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		color:  ${colors.secondary};
	`
	const HeaderLogo = styled.img`
		width: 10%;
		height: 50px;
		margin:auto;
	`
	const HeaderNav = styled.nav`
		width: 10%;
		height: 30px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	`
	const SelectedLink = styled.a`
		background-color: ${colors.primary};
		color: white;
		text-decoration: none;
		border: 1px solid  ${colors.primary};
		border-radius:25px;
	`
	const HeaderLink = styled(Link)`
	background-color: ${colors.primary};
	color: white;
	text-decoration: none;
	border: 1px solid  ${colors.primary};
	border-radius:25px;
	`

function Header({breadcrumbItems}) {

	return (
		<div>
		<HomeHeader >
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        {breadcrumbItems?.map((item) =>
          <Breadcrumb.Item active>{item}</Breadcrumb.Item>
        )}
      </Breadcrumb>
			<HeaderLogo src= {ubc} alt="logo" />
			<HeaderNav>
				<HeaderLink to ="/Login" > &nbsp;&nbsp;Login &nbsp;&nbsp;</HeaderLink>
				<HeaderLink to="/SignUp" > &nbsp;&nbsp;SignIn &nbsp;&nbsp;</HeaderLink>

			</HeaderNav>
		</HomeHeader>
	</div>
	)
}

export default Header;
