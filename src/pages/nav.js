import slideBox from "../component/slidebox";
import styles from "../common/styles";
import { countStore } from "../store/store";

const NavStyle = {
  'width':'50vw',
  'height':'100vh',
  'background-color':'antiquewhite',
  'display':'flex',
  'justify-content':'center',
  'align-items':'center'
}

function Nav(){
  return `
    <div id='Nav' style='${styles(NavStyle)}'>
      ${slideBox()}
    </div>
  `
}

window.onload = () =>{
  let nav = document.getElementById("Nav")
  nav.addEventListener('wheel',(e)=>{
    if(e.wheelDelta === -120){
      if(countStore.getState() > 1){
        countStore.dispatch({type:"DOWN"})
        console.log(countStore.getState())
      }
    }else{
      if(countStore.getState() < 3){
        countStore.dispatch({type:"UP"})
        console.log(countStore.getState())
      }
    }
  })
  
}

export default Nav;
