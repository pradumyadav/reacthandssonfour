import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Student from "./Student";
import Contectus from "./Contectus";
import "./Apply.css"
import dataRoom from "./dataRoom";
import { useState } from "react";
import EditFormCompo from "./EditFormCompo";
import UpdateCompo from "./UpdateCompo";
export default function Navbar(){

    const[data,setdata]=useState([
        {Name:"Leanne",Age:24,Course:"MERN",Batch:"EA24"},

        {Name:"Pradum",Age:23,Course:"MERN",Batch:"EA24"},

        {Name:"Ervin",Age:34,Course:"MERN",Batch:"EA24"},

        {Name:"Patricia",Age:24,Course:"MERN",Batch:"EA24"}
])
    return(

      
        <div>
            <nav className="navBar">
            <Link className="link1" to="/">Home</Link>
            <Link className="link1" to="/student"> Student</Link>
            <Link className="link1" to="/contectus"> Contact US</Link>
            </nav> 
            <Routes>
            <Route path="/" element={<Home/>}/>
             <Route path="/contectus" element={<Contectus/>}/>
             <Route path="/editformcompo" element={
             <dataRoom.Provider   value={{ans1 : data, ans2 : setdata}}>
                    <EditFormCompo />
                </dataRoom.Provider >
            }/>
             <Route path="/student" element={
                <dataRoom.Provider   value={{ans1 : data, ans2 : setdata}}>
                    <Student />
                </dataRoom.Provider >
             }/>
             <Route path="/UpdateCompo" element={
                <dataRoom.Provider   value={{ans1 : data, ans2 : setdata}}>
                <UpdateCompo/>
            </dataRoom.Provider >
             }/>
            </Routes>  
                 
        </div>
    )
}