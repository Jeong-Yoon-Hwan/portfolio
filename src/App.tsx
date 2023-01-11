import styled from "styled-components";
import { Link } from "react-router-dom";
import { BrowserRouter,Route, Routes, Navigate } from "react-router-dom";
import Title from "./component/Title";
import FirstList from "./pages/FirstList";
import SecondList from "./pages/SecondList";
import ThirdList from "./pages/ThirdList";
import FourthList from "./pages/FourthList";


const App:React.FC = () =>{
  return(
    <Container>
      <BrowserRouter>
      <Nav>
        <Title></Title>
        <Link to="/first"><ListBox color={"first"}>first</ListBox></Link>
        <Link to="/second"><ListBox color={"second"}>second</ListBox></Link>
        <Link to="/third"><ListBox color={"first"}>third</ListBox></Link>
        <Link to="/fourth"><ListBox color={"second"}>fourth</ListBox></Link>
      </Nav>

      <Main>
          <Routes>
            <Route path="/" element={<FirstList/>}></Route>
            <Route path="/first" element={<FirstList/>}></Route>
            <Route path="/second" element={<SecondList/>}></Route>
            <Route path="/third" element={<ThirdList/>}></Route>
            <Route path="/fourth" element={<FourthList/>}></Route>
          </Routes>
        
      </Main>
      </BrowserRouter>
    </Container>
  )
}

export default App;

const Container = styled.div`
  width:100vw;
  height:100vh;
  display: flex;
`
//메인화면 
const Main = styled.div`
  width:100vw;
  height:100vh;
  background-color: #FFC3A1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`
//메뉴화면
const Nav = styled.div`
  width:30vw;
  height:100vh;
  background-color: rgba(182,87,84);
  padding:10px;
  display: flex;
  flex-direction: column;
  gap:10px;
`

const backgroundColor ={
  first:"rgba(255,255,255,0.3)",
  second:"rgba(255,255,255,0.2)",
}
interface styleProps {
  color:"first" | "second"
}

const ListBox= styled.div<styleProps>`
  width:100%;
  //height:calc(70% / 4);
  height:calc(70vh / 4);
  background-color: ${(props)=>backgroundColor[props.color]};
  display: flex;
  justify-content: center;
  align-items:center;
  border-radius: 2px;
`