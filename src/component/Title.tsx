import styled from "styled-components";

const Title = () =>{
  return(
    <Container>
      <div>
        Jeong Yoon Hwan<br></br>
        Portfolio
      </div>
    </Container>
  )
}

export default Title;

const Container = styled.div`
  width:100%;
  height:30%;
  //background-color: rgba(182,87,84);
  display:flex;
  justify-content: center;
  align-items: center;
  color:white;
  font-size: 2rem;
  font-weight:bold;
  text-align:center;
  
  font-family: var(--font-DoHyeon);
`