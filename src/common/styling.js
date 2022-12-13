
/**
 * 
 * @param {*} element 적용할 element를 입력
 * @param {*} props 객체형태의 스타일 내용을 입력
 */

function styling(element,props){
  for(let styleName in props){
    element.style[styleName] = props[styleName];
  }
  element.display='flex',
  element.justifyContent="center",
  element.alignItems="center"
}

export default styling