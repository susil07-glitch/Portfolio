
import {Routes,Route, HashRouter} from "react-router-dom"



import Project from "./component/Project"
import Contact from "./component/Contact"
import Navbar from "./component/Navbar"
import Home from "./component/Home"


const App = () => {
  return (
    <div>
      <HashRouter>
      <Routes> 
        <Route path="/" element={<Home/>}></Route>
       
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/navbar" element={<Navbar/>}></Route>

      </Routes>
      
      </HashRouter>
      
    </div>
  )
}

export default App
