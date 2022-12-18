import React from "react";
import styled from "styled-components";
import Main from "./component/Main";
import Nav from "./component/Nav";

const App = () =>{
  return(
    <Container>
      <Nav/>
      <Main/>
    </Container>
  )
  
}
export default App;

const Container = styled.div`
  width:100vw;
  height:100vh;
`