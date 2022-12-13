import { createStore } from "redux";

const countModifier = (count = 0, action) => {
    if(action.type === "ADD"){
      return count + 1;
    }else if(action.type === "DEL"){
      return count - 1;
    }
    return count;
}

export const countStore = createStore(countModifier)


console.log(countStore.getState())