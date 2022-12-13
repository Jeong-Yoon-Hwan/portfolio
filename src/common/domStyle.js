import flex from "./flex";

class domStyle extends flex{
  constructor(width,height,bgColor){
    super(...arguments)
    this.width = width;
    this.height = height;
    this.backgroundColor = bgColor;
  }
}

export default domStyle