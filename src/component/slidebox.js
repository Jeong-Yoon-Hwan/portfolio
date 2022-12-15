
import styles from "../common/styles"
import { countStore } from "../store/store"
import domStyle from "../common/domStyle"

const slideStyle = new domStyle('200px','100px','gray')


function slideBox(){
  return `<div style='${styles(slideStyle)}'>slidBox</div>`
}


export default slideBox