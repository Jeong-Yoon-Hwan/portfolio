import "./style.css"
import Main from './pages/main'
import Nav from './pages/nav'

import { countStore } from "./store/store"


const root = document.getElementById('root')


root.appendChild(Nav) 
root.appendChild(Main)



