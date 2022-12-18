
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Flex } from "../common/styled";
import countStore from "../store/countStore";


const Nav = () =>{
  const [count,setCount] = useState('')

  function countHandle(){
    countStore.dispatch({type:"ADD"})
    console.log(countStore.getState())
    setCount(countStore.getState())
  }

  useEffect(()=>{
    if(count === 2){
      alert(1);
    }
  })

  return(
    <Container onClick={countHandle}>Nav</Container>
  )
}
export default Nav;

const Container = styled(Flex)`
  width:50vw;
  height:100vh;
  background-color: tomato;
`