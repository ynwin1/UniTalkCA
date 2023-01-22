import React, {useRef, useState} from "react";
import Header from '../../components/Header'
import Main from '../../components/Main'
import Breadcrumb from "react-bootstrap/Breadcrumb";

function Home() {
  return(
    <div>
      <Header/>
      <Main/>
    </div>
  );

}

export default Home;