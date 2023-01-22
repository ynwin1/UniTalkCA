import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import {useState} from 'react'

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
	const HeaderLink = styled.a`
	background-color: ${colors.primary};
	color: white;
	text-decoration: none;
	border: 1px solid  ${colors.primary};
	border-radius:25px;
	`

	const HomeDescription = styled.div`
    width: 90%;
	margin:auto;
	height:500px;
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    vertical-align: sup;
    line-height: 1.5;
	text-align: center;
	background-color:${colors.backgroundLight};
  `

  const SelectedDiv= styled.div`
	text-align: center;
	padding-top: 30px;
`
const SelectedElement= styled.select`
width:350px;
height:40px;
border-radius: 10px 10px  ;
`
const NavOptions= styled.div`
margin: auto;
border: 1px solid ${colors.primary};
border-radius: 10px 10px;
width:350px;


`
const LinkOptions= styled.a`
color :${colors.secondary};
display: inline-block;
width:250px;
height:100px;
line-height:100px;
`


function Header() {
   
	const [isSelected, setIsSelected] = useState (false);

	return (
		<div>
		<HomeHeader >
			<HeaderLogo src="" alt="logo" />
			<HeaderNav>
				<HeaderLink > &nbsp;&nbsp;Login &nbsp;&nbsp;</HeaderLink>
				<HeaderLink > &nbsp;&nbsp;SignIn &nbsp;&nbsp;</HeaderLink>
				
			</HeaderNav>
		</HomeHeader>

<HomeDescription>
	<h1> Canadian Universities </h1>
	

<SelectedDiv>
<SelectedElement  >
    <option value="none">Select a University</option>
	<option value="UBC">UBC</option>
	<option  value="SFU">SFU</option>
	<option  value="UVIC">UVIC</option>
	<option  value="TRU">TRU</option>
	<option  value="Waterloo">Waterloo</option>
	
 </SelectedElement> 
 
</SelectedDiv>
<NavOptions>
 <LinkOptions>Admissions </LinkOptions>
 </NavOptions>
 

 <NavOptions>
 <LinkOptions>General </LinkOptions>
 </NavOptions>

 <NavOptions>
 <LinkOptions> Forum </LinkOptions>
 </NavOptions>
	</HomeDescription>
	</div>
	)
}

export default Header;
