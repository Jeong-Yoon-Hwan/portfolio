import styled from "styled-components";
import Slide from "../component/Slide";
import { flexCenter } from "../common/flex";

const Nav:React.FC = () =>{
  return(
    <Container>
      <Slide/>
    </Container>
  )
}

export default Nav;

const Container = styled(flexCenter)`
  width:50vh;
  height:100vh;
`

