import styled from "styled-components";
import {IoIosArrowBack} from "react-icons/Io";
import {IoIosArrowForward} from "react-icons/Io";
import { useEffect, useRef, useState } from "react";

// 1. 슬라이드 이미지를 담을 요소 선언, slideRef
// 2. 슬라이드를 넘길 때마다 useState로 페이지번호를 관리, currentImgOrder 
//    버튼, moveNext, movePrev
// 3. 이미지 폭 , IMG_WIDTH
// 4. 슬라이드 이동할 거리 계산, 현재 페이지번호 * 이미지 크기
const SlideBox = () =>{
  

  const slideRef:any = useRef(null);
  const [currentImgOrder,setCurrentImgOrder] = useState(0)
  const IMG_WIDTH = 300;
  const slideRange = currentImgOrder * IMG_WIDTH;

  useEffect(()=>{
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${slideRange}px)`;
    console.log(currentImgOrder)
  },[currentImgOrder]);


  const moveNext = () =>{
    if(currentImgOrder === 2) {
      setCurrentImgOrder(0)
      return
    }
    
    setCurrentImgOrder(currentImgOrder + 1)
    
  };

  const movePrev = () =>{ 
    if(currentImgOrder === 0 ) return;
    setCurrentImgOrder(currentImgOrder - 1)
   
  };


  return(
    <Container>
      <IoIosArrowBack style={{fontSize:50}} onClick={movePrev} />
      <Wrap>
        <Slide ref={slideRef}>
          <div>first</div>
          <div>second</div>
          <div>third</div>
        </Slide>
      </Wrap>
      <IoIosArrowForward style={{fontSize:50}} onClick={moveNext}/>
    </Container>
  )
}

export default SlideBox;

const Container = styled.div`
  width:100%;
  height:100%;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  
`
const Wrap = styled.div`
  width: 300px;
  height:300px;
  overflow-x: hidden;
`
const Slide = styled.div`
  width:900px;
  height:300px;
  background-color: aliceblue;
  display: flex;
  
  & > div:nth-child(1){
    width:300px;
    height:300px;
    background-color: red;
  }
  &> div:nth-child(2){
    width: 300px;
    height:300px;
    background-color: black;
  }
  & > div:nth-child(3){
    width:300px;
    height: 300px;
    background-color: green;
  }
`