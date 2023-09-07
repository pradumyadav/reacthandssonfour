import { useState } from "react"
import { Link } from "react-router-dom"

export default function Student(){

    const[data]=useState([{name:"Leanne",
    age:24,
    course:"MERN",
    batch:"EA24",
    change:"edit"},
    {
    name:"Pradum",
    age:23,
    course:"MERN",
    batch:"EA24",
    change:"edit"
    },

    {
    name:"Ervin",
    age:34,
    course:"MERN",
    batch:"EA24",
    change:"edit"
    },
    {
    name:"Patricia",
    age:24,
    course:"MERN",
    batch:"EA24",
    change:"edit"
    }
]
    
                             
)
    return(
        <div>
        <div className="side">Student Details</div>
        <button className="button1">Add new student</button>
       
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
                        {data.map((item,index)=>{
                            return(
                                <>
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.course}</td>
                                    <td>{item.batch}</td>
                                    <td><Link>{item.change}</Link></td>
                                </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
        
        
        </div>
    )

}