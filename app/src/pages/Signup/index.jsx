import React, { useState, useEffect, useRef} from "react";
import colors from  '../../utils/style/colors.js'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {firestore, app} from "../../modules/firebase";
import {addDoc, collection, getDocs, doc, updateDoc} from "@firebase/firestore";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import Header from "../../components/Header";

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
    const auth = getAuth(app);
    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    const ref = collection(firestore, 'userData');
   


    const handleSubmit = async (e) =>{
    	e.preventDefault(); 
        
        let data = {
            name: nameRef.current.value,
        	email: emailRef.current.value,
            password: passwordRef.current.value
        }

        try
        {
        	const response =  await createUserWithEmailAndPassword(auth, data.email, data.password);
           
            const datas = response.user;
            console.log(response);

        
        }
        catch(e)
        {
        	console.log(e);
        }
        finally{
            addDoc(ref, data);
        }

    };

		


		

return(<div>
    <Header/>
<HomeDescription>
    <FormDiv>
        <h3> Create a new account</h3>
        <FormInput type="text" ref ={nameRef} />

        <FormInput type="text" ref ={emailRef} />
        <FormInput type="password" ref ={passwordRef} />
        <SubmitLink onClick ={handleSubmit}> &nbsp;&nbsp;&nbsp; Signup&nbsp;&nbsp;&nbsp;</SubmitLink>
        already an account ?<signupLink to ="/Login">Login</signupLink> 
        
    </FormDiv>


</HomeDescription>
</div>
)

}

export default SignUp;