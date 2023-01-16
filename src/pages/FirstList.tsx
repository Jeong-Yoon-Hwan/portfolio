import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SlideBox from "../component/SlideBox";


const FirstList = () =>{
  
// 이미지 경로 배열
  const arr:any  = ['/images/first/1.png','/images/first/2.png','/images/first/3.png','/images/first/4.png'];

  return(
    <Container>
      {/* 헤더 */}
      <Title>
        <h2>Project 1</h2>
        <p>2022.09 - 2022.10</p>
      </Title>
      {/* 메인화면 */}
      <Main>
        <section>
          <SlideBox img={...arr}></SlideBox>
         
        </section>
        <section>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ea atque illum necessitatibus ipsum ducimus libero incidunt, ab quod exercitationem dolore cum officiis. Autem, eius! Distinctio temporibus quae autem rerum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ea atque illum necessitatibus ipsum ducimus libero incidunt, ab quod exercitationem dolore cum officiis. Autem, eius! Distinctio temporibus quae autem rerum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ea atque illum necessitatibus ipsum ducimus libero incidunt, ab quod exercitationem dolore cum officiis. Autem, eius! Distinctio temporibus quae autem rerum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ea atque illum necessitatibus ipsum ducimus libero incidunt, ab quod exercitationem dolore cum officiis. Autem, eius! Distinctio temporibus quae autem rerum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ea atque illum necessitatibus ipsum ducimus libero incidunt, ab quod exercitationem dolore cum officiis. Autem, eius! Distinctio temporibus quae autem rerum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ea atque illum necessitatibus ipsum ducimus libero incidunt, ab quod exercitationem dolore cum officiis. Autem, eius! Distinctio temporibus quae autem rerum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ea atque illum necessitatibus ipsum ducimus libero incidunt, ab quod exercitationem dolore cum officiis. Autem, eius! Distinctio temporibus quae autem rerum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ea atque illum necessitatibus ipsum ducimus libero incidunt, ab quod exercitationem dolore cum officiis. Autem, eius! Distinctio temporibus quae autem rerum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ea atque illum necessitatibus ipsum ducimus libero incidunt, ab quod exercitationem dolore cum officiis. Autem, eius! Distinctio temporibus quae autem rerum!
        ab quod exercitationem dolore cum officiis. Autem, eius! Distinctio temporibus quae autem rerum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ea atque illum necessitatibus ipsum ducimus libero incidunt, ab quod exercitationem dolore cum officiis. Autem, eius! Distinctio temporibus quae autem rerum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ea atque illum necessitatibus ipsum ducimus libero incidunt, ab quod exercitationem dolore cum officiis. Autem, eius! Distinctio temporibus quae autem rerum!ab quod exercitationem dolore cum officiis. Autem, eius! Distinctio temporibus quae autem rerum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ea atque illum necessitatibus ipsum ducimus libero incidunt, ab quod exercitationem dolore cum officiis. Autem, eius! Distinctio temporibus quae autem rerum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ea atque illum necessitatibus ipsum ducimus libero incidunt, ab quod exercitationem dolore cum officiis. Autem, eius! Distinctio temporibus quae autem rerum!ab quod exercitationem dolore cum officiis. Autem, eius! Distinctio temporibus quae autem rerum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ea atque illum necessitatibus ipsum ducimus libero incidunt, ab quod exercitationem dolore cum officiis. Autem, eius! Distinctio temporibus quae autem rerum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ea atque illum necessitatibus ipsum ducimus libero incidunt, ab quod exercitationem dolore cum officiis. Autem, eius! Distinctio temporibus quae autem rerum!ab quod exercitationem dolore cum officiis. Autem, eius! Distinctio temporibus quae autem rerum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ea atque illum necessitatibus ipsum ducimus libero incidunt, ab quod exercitationem dolore cum officiis. Autem, eius! Distinctio temporibus quae autem rerum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ea atque illum necessitatibus ipsum ducimus libero incidunt, ab quod exercitationem dolore cum officiis. Autem, eius! Distinctio temporibus quae autem rerum!
        </section>
      </Main>
    </Container>
  )
}
export default FirstList;

const Container = styled.div`
  width:100%;
  height:100%;
  background-color: white;
  display: flex;
  flex-direction:column;
  
`
const Title = styled.div`
  width:100%;
  height:100px;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap:10px;
`
const Main = styled.div`
  width:100%;
  height:max-content;
  background-color: gray;
  padding:10px;
  display: flex;
  flex-direction: column;
  
  

  //좌측 화면
  & > section {
    width:100%;
    height: max-content;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  //우측 화면
  & > section:nth-child(2){
    background-color: white;
  }
`
