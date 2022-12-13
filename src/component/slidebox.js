import styling from "../common/styling"
import domStyle from "../common/domStyle"


const slideBox = document.createElement('div')
const slideStyle = new domStyle('200px','100px','gray')

styling(slideBox,slideStyle)

export default slideBox