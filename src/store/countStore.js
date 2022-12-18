import { createStore } from "redux";

function counter(count = 0, action){
  switch (action.type){
    case "ADD":
      return count + 1
    case "DEL":
      return count -1
    default:
      return count
  }
}

let countStore = createStore(counter)

export default countStore;
