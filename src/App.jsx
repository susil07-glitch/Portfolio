
import {Routes,Route, HashRouter} from "react-router-dom"



import Project from "./component/Project"
import Contact from "./component/Contact"
import Navbar from "./component/Navbar"
import Home from "./component/Home"
import About from "./component/About"
import Skill from "./component/Skill"


const App = () => {
  return (
    <div>
      <HashRouter>
      <Routes> 
        <Route path="/" element={<Home/>}></Route>
       
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/skill" element={<Skill/>}></Route>
        

      </Routes>
      
      </HashRouter>
      
    </div>
  )
}

export default App
