
import styles from "../common/styles"
import { countStore } from "../store/store"

const slideStyle = {
  'width':'200px',
  'height':'100px',
  'background-color':'gray'
}

function slideBox(){
  return `<div style='${styles(slideStyle)}'>slidBox</div>`
}


export default slideBox