import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Student from "./Student";
import Contectus from "./Contectus";
import "./Apply.css"

export default function Navbar(){
    return(

      
        <div>
            <nav className="navBar">
            <Link className="link1" to="/">Home</Link>
            <Link className="link1" to="/student"> Student</Link>
            <Link className="link1" to="/contectus"> Contact US</Link>
            </nav> 
            <Routes>
            <Route path="/" element={<Home/>}/>
             <Route path="/student" element={<Student/>}/>
             <Route path="/contectus" element={<Contectus/>}/>
            </Routes>  
                 
        </div>
    )
}