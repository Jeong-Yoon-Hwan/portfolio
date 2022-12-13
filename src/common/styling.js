

function styling(element,props){
  for(let styleName in props){
    element.style[styleName] = props[styleName];
  }
  element.display='flex',
  element.justifyContent="center",
  element.alignItems="center"
}

export default styling