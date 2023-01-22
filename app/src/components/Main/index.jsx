
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import waterloo from  '../../assets/waterloo.png'
import ubc from  '../../assets/ubc.png'
import tru from  '../../assets/tru.png'


	
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
	height:900px;
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

const GroupDiv= styled.div`
	height: 1000px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	

	
`
const LinkOptions= styled(Link)`
color :${colors.secondary};
display: inline-block;
width:250px;
height:100px;
line-height:100px;

`
const Logo= styled.img`
width:150px;
height:100px;
margin: auto;
display: block;
text-align: center;
`



function Main() {
   
	const [isSelected, setIsSelected] = useState (false);
	const [univ, setUniv] = useState ('ubc');
	const [logo, setLogo] = useState (ubc);

	function handleOnChange (value)
{
       
     
        if (value === 'none')
		{
			setIsSelected(false);
		}
		else{

			if(value === 'UBC')
			{
				
				setLogo(ubc);
				setUniv('ubc');
			}
			else if (value === 'Waterloo')
			{
				setLogo(waterloo);
				setUniv('waterloo');
			}
			else if (value === 'TRU')
			{
				setLogo(tru);
				setUniv('tru');
			}
			

			setIsSelected(true);
			
		}

			
		
}

	return (
		<div>
		

<HomeDescription>
	<h1> Canadian Universities </h1>
	

<SelectedDiv>
<SelectedElement  onChange = {(e) =>handleOnChange (e.target.value)}>
    <option value="none">Select a University</option>
	<option value="UBC">UBC</option>
	<option  value="SFU">SFU</option>
	<option  value="UVIC">UVIC</option>
	<option  value="TRU">TRU</option>
	<option  value="Waterloo">Waterloo</option>
	
 </SelectedElement> 
 
</SelectedDiv>
{isSelected && <GroupDiv>
	
	<Logo src= {logo} alt="school"/>
<NavOptions>
 <LinkOptions >Admissions </LinkOptions>
 </NavOptions>
 

 <NavOptions>
 <LinkOptions >Courses </LinkOptions>
 </NavOptions>

 <NavOptions>
 <LinkOptions to="/Posts"> Professors </LinkOptions>
 </NavOptions>

 <NavOptions>
 <LinkOptions >Finance </LinkOptions>
 </NavOptions>

 <NavOptions>
 <LinkOptions >General </LinkOptions>
 </NavOptions>
 </GroupDiv>
}
	</HomeDescription>
	</div>
	)
}

export default Main;
