import styled from "styled-components";
import Main from "./pages/Main";
import Nav from "./pages/Nav";

const App:React.FC = () =>{
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
  display: flex;
`