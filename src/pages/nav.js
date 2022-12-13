import styling from "../common/styling";
import slideBox from "../component/slidebox";

import domStyle from "../common/domStyle";

//스타일 클래스 생성
// class styles extends flex {
//   constructor(width,height,bgColor){
//     super(...arguments)
//     this.width = width;
//     this.height = height;
//     this.bgColor = bgColor;
//   }
// }




const NavStyle = new domStyle('50%','100vh','antiquewhite')

console.log(NavStyle)
const Nav = document.createElement("Nav")
styling(Nav,NavStyle)

//슬라이드 추가
Nav.appendChild(slideBox)


export default Nav;