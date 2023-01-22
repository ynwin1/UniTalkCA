
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import colors from '../../utils/style/colors'
import React, {useState, useContext} from 'react'
import waterloo from  '../../assets/waterloo.png'
import ubc from  '../../assets/ubc.png'
import tru from  '../../assets/tru.png'
import user from  '../../assets/user.jpg'
import {Breadcrumb} from "react-bootstrap";
import Post from "../Post";
import {UserContext} from '../../utils/Context'

const HomeHeader = styled.header`
		width: 95%;
		margin: auto;
		margin-top: 25px;
		height: 150px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		color:  ${colors.secondary};
	`
	const HeaderLogo = styled.img`
		width: 10%;
		height: 50px;
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

function Header({university, category, image}) {

 const {userEmail, setUserEmail} = useContext(UserContext);

	return (
		<div>
		<HomeHeader >
      <Breadcrumb>

        {(university !== undefined && category !== undefined) ? (
          <>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>{university}</Breadcrumb.Item>
            <Breadcrumb.Item active>{category}</Breadcrumb.Item>
          </>
        ) : (
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        )}
      </Breadcrumb>
			<HeaderLogo src= {image ?? ubc} alt="logo" />
			<HeaderNav>
			<HeaderLink to ="/Login" > &nbsp;&nbsp;Login &nbsp;&nbsp;</HeaderLink>
				<HeaderLink to="/SignUp" > &nbsp;&nbsp;SignUp &nbsp;&nbsp;</HeaderLink>




			</HeaderNav>
		</HomeHeader>
	</div>
	)
}

export default Header;
