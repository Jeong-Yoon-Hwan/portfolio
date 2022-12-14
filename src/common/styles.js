

export default function styles(props){
  let result='';
  for(let style in props){
    result += `${style} : ${props[style]};`
  }
  return result;
}
