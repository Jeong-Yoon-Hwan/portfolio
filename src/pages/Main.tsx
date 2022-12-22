import styled from "styled-components";
import { flexCenter } from "../common/flex";

const Main:React.FC = () =>{
  return(
    <Container>Main</Container>
  )
}

export default Main;

const Container = styled(flexCenter)`
  width:50vw;
  height:100vh;
  background-color: lightgray;
`