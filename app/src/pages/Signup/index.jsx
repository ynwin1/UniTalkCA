import React, { useState} from "react";
import colors from  '../../utils/style/colors.js'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const HomeDescription = styled.div`
    width: 70%;
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
  const FormDiv= styled.form`
  text-align:center;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 550px;
      height:250px;
      margin: auto;
      display: flex;
      
      
      
  `
const FormInput= styled.input`
    
	width: 250px;
    margin:auto;
    height:50px;
	border: 1px solid ${colors.primary};
    border-radius: 10px 10px;
	
`


const SubmitLink = styled.a`
        width: 100px;
        margin:auto;
		background-color: ${colors.primary};
		color: white;
		text-decoration: none;
		border: 1px solid  ${colors.primary};
		border-radius:25px;
        height: 30px;
        line-height:30px;

	`
    const signupLink = styled(Link)`
 `

function SignUp()

{
   

return(
<HomeDescription>
    <FormDiv>
        <h3> Create a new account</h3>
        <FormInput type="text" value = "Enter your User name"/>

        <FormInput type="text" value = "Enter your User e-mail"/>
        <FormInput type="password" value = "Enter your Password"/>
        <SubmitLink> &nbsp;&nbsp;&nbsp; Signup&nbsp;&nbsp;&nbsp;</SubmitLink>
        already an account ?<signupLink to ="/Login">Login</signupLink> 
        
    </FormDiv>


</HomeDescription>

)

}

export default SignUp;