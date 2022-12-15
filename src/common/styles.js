
//문자열이 대문자일때 소문자로 바꾸고 하이픈 추가해서 css 작성
function change(str){
  for(let i=0;i<str.length;i++){
    if(str[i] === str[i].toUpperCase()){
      let first = str.slice(0,i);
      let second = str.slice(i,str.length).toLowerCase();
      return first + "-" + second
    }
  }
  return str;
}

//스타일 객체를 입력해서 문자열로 반환
export default function styles(props){
  let result='';
  for(let style in props){
    result += `${change(style)} : ${props[style]};`
  }
  return result;
}
