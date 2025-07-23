
import { BrowserRouter,Routes,Route} from "react-router-dom"



import Project from "./component/Project"
import Contact from "./component/Contact"
import Navbar from "./component/Navbar"
import Home from "./component/Home"


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home/>}></Route>
       
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/navbar" element={<Navbar/>}></Route>

      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
