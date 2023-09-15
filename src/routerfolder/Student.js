
import { NavLink, useNavigate } from "react-router-dom"

import { useContext } from "react"

 import dataRoom from "./dataRoom"


 
export default function Student(){
    const passData= useContext( dataRoom)
    const updateLink= useNavigate()
    return(
        <div>
        <div className="side">Student Details</div>
        <button className="button1" onClick={()=>updateLink("/UpdateCompo")}>Add new student</button>
       
                <table border="5" width="85%" height="450px">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Course</th>
                            <th>Batch</th> 
                            <th>Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {passData.ans1.map((item,index)=>{
                            return(
                                <>
                                <tr key={index}>
                                    <td>{item.Name}</td>
                                    <td>{item.Age}</td>
                                    <td>{item.Course}</td>
                                    <td>{item.Batch}</td>
                                    <td><NavLink to="/editformcompo" state={{index}}>EDIT</NavLink></td>
                                </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
        
        
        </div>
    )

}