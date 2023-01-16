import styled from "styled-components";
import {IoIosArrowBack} from "react-icons/Io";
import {IoIosArrowForward} from "react-icons/Io";
import { useEffect, useRef, useState } from "react";

// 1. 슬라이드 이미지를 담을 요소 선언, slideRef
// 2. 슬라이드를 넘길 때마다 useState로 페이지번호를 관리, currentImgOrder 
//    버튼, moveNext, movePrev
// 3. 이미지 폭 , IMG_WIDTH
// 4. 슬라이드 이동할 거리 계산, 현재 페이지번호 * 이미지 크기
const SlideBox = (props:any) =>{
  

  const slideRef:any = useRef(null);
  const [currentImgOrder,setCurrentImgOrder] = useState(0)
  const IMG_WIDTH = 500;
  const slideRange = currentImgOrder * IMG_WIDTH;


  useEffect(()=>{
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${slideRange}px)`;
    console.log(currentImgOrder)
  },[currentImgOrder]);


  const moveNext = () =>{
    if(currentImgOrder === (props.img.length-1)) {
      setCurrentImgOrder(0)
      return
    }
    
    setCurrentImgOrder(currentImgOrder + 1)
    
  };

  const movePrev = () =>{ 
    if(currentImgOrder === 0 ) return;
    setCurrentImgOrder(currentImgOrder - 1)
   
  };
  const [imgArr,setImgArr] = useState([])

  useEffect(()=>{
    console.log(props.img.length)
    setImgArr(props.img)
  },[])
  return(
    <Container>
      <IoIosArrowBack style={{fontSize:50,cursor:"pointer"}} onClick={movePrev} />
      <Wrap>
        <Slide ref={slideRef}>
          {
            imgArr.map((item:any)=>(
            <div key={item}><img src={item}></img></div>
            ))
          }
          {/* <div><img src={props.img[0]}></img></div> */}
          
        </Slide>
      </Wrap>
      <IoIosArrowForward style={{fontSize:50,cursor:"pointer"}} onClick={moveNext}/>
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
  width: 500px;
  height:300px;
  overflow-x: hidden;
 
`
const Slide = styled.div`
  width:max-content;
  height:300px;
  background-color: aliceblue;
  display: flex;
  
  & > div{
    width:500px;
    height:300px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > img {
    width:100%;
    
  }
}

  
`