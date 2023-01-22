import React, {useRef, useState} from "react";
import Header from '../../components/Header'
import Main from '../../components/Main'
import Login from '../Login'


function Home() {
  const  {isForm , setIsForm} = useState(false);

  return(
    <div>
      <Header/>
      <Main/>
    >
    </div>
  );

}

export default Home;