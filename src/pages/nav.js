import styling from "../common/styling";
import slideBox from "../component/slidebox";

import domStyle from "../common/domStyle";


const NavStyle = new domStyle('50%','100vh','antiquewhite')

console.log(NavStyle)
const Nav = document.createElement("Nav")
styling(Nav,NavStyle)

//슬라이드 추가
Nav.appendChild(slideBox)


export default Nav;