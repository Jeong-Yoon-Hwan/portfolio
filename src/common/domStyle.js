import flex from "./flex";


class domStyle extends flex{
  /**
   * 
   * @param {*} width  가로폭
   * @param {*} height 세로폭
   * @param {*} bgColor 배경색
   */
  constructor(width,height,bgColor){
    super(...arguments)
    this.width = width;
    this.height = height;
    this.backgroundColor = bgColor;
  }
}

export default domStyle