import styled from "styled-components";
import Slide from "../component/Slide";

const Nav:React.FC = () =>{
  return(
    <Container>
      <Slide/>
    </Container>
  )
}

export default Nav;

const Container = styled.div`
  width:50vh;
  height:100vh;
`

