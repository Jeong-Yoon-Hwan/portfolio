import { createStore } from "redux";


//기본 count 값에서 "UP"요청시 +1 DOWN 요청시 -1
const countModifier = (count = 1, action) => {
    if(action.type === "UP"){
      return count + 1;
    }else if(action.type === "DOWN"){
      return count - 1;
    }
    return count;
}

export const countStore = createStore(countModifier)


console.log(countStore.getState())