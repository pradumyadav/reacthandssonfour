import { useContext } from "react"
import dataRoom from "./dataRoom"
import { useNavigate } from "react-router-dom"

import "./Apply.css"

export default function UpdateCompo(){

    const data3 = useContext(dataRoom)
    const Navi= useNavigate()

    const updatteObj={
        Name:"",
        Age:"",
        Course:"",
        Batch:""

    }
    const changeHandle=(e)=>{
        updatteObj[e.target.name]= e.target.value
    }

    const handleClick=()=>{
        data3.ans1.push(updatteObj)
        Navi('/student')
    }
    return(
        <div className="inputPage2">

            <input className="input1" type="text" name="Name" placeholder="Enter Name" onChange={changeHandle}/><br/>
            <input className="input1" type="text" name="Age" placeholder="Enter Age" onChange={changeHandle}/><br/>
            <input className="input1" type="text" name="Course" placeholder="Enter Course" onChange={changeHandle}/><br/>
            <input className="input1" type="text" name="Batch" placeholder="Enter batch" onChange={changeHandle}/><br/>
            <button className="button1"  onClick={()=> Navi("/student")}>Back</button>
            <button className="button1" onClick={handleClick}> Submit</button>
        </div>
    )
}