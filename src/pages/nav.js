import styling from "../common/styling";
import slideBox from "../component/slidebox";

import domStyle from "../common/domStyle";
import { countStore } from "../store/store";

const NavStyle = new domStyle('50%','100vh','antiquewhite')

console.log(NavStyle)
const Nav = document.createElement("Nav")
styling(Nav,NavStyle)

//슬라이드 추가
Nav.appendChild(slideBox)


//마우스 휠 감지 이벤트 추가 
//휠 up,down 시에 countStore 값이 1씩 증가하거나 감소함 
Nav.addEventListener('wheel',function(e){
  if(e.wheelDelta === -120){
    if(countStore.getState() > 1){
      countStore.dispatch({type:"DOWN"})
      console.log(countStore.getState())
    }
    console.log('down')
  } else{
    if(countStore.getState() < 3){
      countStore.dispatch({type:"UP"})
      console.log(countStore.getState())
    }
    console.log('up')
  }
})


export default Nav;
