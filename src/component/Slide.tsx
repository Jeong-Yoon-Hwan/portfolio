import styled from "styled-components";
import { flexCenter } from "../common/flex";

const Slide:React.FC = ()=>{
  return(
    <Container>
      <Button></Button>
      <Button></Button>
    </Container>
  )
}

export default Slide

const Container = styled(flexCenter)`
  width:200px;
  height: 100px;
  background-color: gray;
  justify-content: space-between;
`

const Button = styled.div`
  width:30px;
  height: 100%;
  background-color: red;
`