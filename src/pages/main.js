
import styles from "../common/styles";
import domStyle from "../common/domStyle";

const MainStyle = new domStyle('50vw','100vh','white')

function Main(){
  return `<div style='${styles(MainStyle)}'>Main</div>`
}

export default Main