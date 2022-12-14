
import styles from "../common/styles";

// const Main = document.createElement("div")

const MainStyle = {
  "width":'50vw',
  "height":'100vh',
  "background-color":'white',
  "display":'flex',
  'justify-content':'center',
  'align-items':'center'
}



function Main(){
  return `<div style='${styles(MainStyle)}'>Main</div>`
}

export default Main