import styled from "styled-components";
import { Link } from "react-router-dom";
import {HashRouter, BrowserRouter,Route, Routes } from "react-router-dom";
import Title from "./component/Title";
import FirstList from "./pages/FirstList";
import SecondList from "./pages/SecondList";
import ThirdList from "./pages/ThirdList";
import FourthList from "./pages/FourthList";



const App:React.FC = () =>{
  return(
    <Container>
      <HashRouter basename="/portfolio">
      <Nav>
        <Title></Title>
        <Link to="/first" style={{textDecoration: "none",color:'white',fontWeight:'bold'}}><ListBox color={"first"}>Project 1</ListBox></Link>
        <Link to="/second" style={{textDecoration: "none",color:'white',fontWeight:'bold'}}><ListBox color={"second"}>Project 2</ListBox></Link>
        <Link to="/third" style={{textDecoration: "none",color:'white',fontWeight:'bold'}}><ListBox color={"first"}>Project 3</ListBox></Link>
        <Link to="/fourth" style={{textDecoration: "none",color:'white',fontWeight:'bold'}}><ListBox color={"second"}>Project 4</ListBox></Link>
      </Nav>

      <Main>
          <Routes>
            <Route path="/" element={<FirstList/>}></Route>
            <Route path="/portfolio" element={<FirstList/>}></Route>
            <Route path="/first" element={<FirstList/>}></Route>
            <Route path="/second" element={<SecondList/>}></Route>
            <Route path="/third" element={<ThirdList/>}></Route>
            <Route path="/fourth" element={<FourthList/>}></Route>
          </Routes>
        
      </Main>
      </HashRouter>


    </Container>
  )
}

export default App;

const Container = styled.div`
  width:100vw;
  height:100vh;
  display: flex;
  font-family: var(--font-NanumGothic);
`
//메인화면 
const Main = styled.div`
  width:100vw;
  height:100vh;
  background-color:#404258;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  overflow-y: scroll;
`

//메뉴 영역 
const Nav = styled.div`
  width:30vw;
  height:100vh;
  background-color: #404258;
  //padding:10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap:10px;
`

const backgroundColor ={
  first:"rgba(255,255,255,0.2)",
  second:"rgba(255,255,255,0.2)",
}
interface styleProps {
  color:"first" | "second"
}

// 메뉴 리스트
const ListBox= styled.div<styleProps>`
  width:250px;
  height:calc(70vh / 4);
  background-color: ${(props)=>backgroundColor[props.color]};
  display: flex;
  justify-content: center;
  align-items:center;
  border-radius: 0px 20px 20px 0px;

  :hover{
    background-color: tomato;
  }
  transition: background 0.5s ease-in-out;
  
  @media screen and (max-width: 1100px) {
    width:200px;
  }
  
`
  
