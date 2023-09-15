import { useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import dataRoom from "./dataRoom"
import "./Apply.css"

export default function EditFormCompo(){

    const dataFromStu= useContext(dataRoom);

    const changeLink =useNavigate();

    const stuIndex =useLocation().state.index
    console.log(stuIndex)

            const onObj={
                Name:  dataFromStu.ans1[stuIndex].Name,
                Age: dataFromStu.ans1[stuIndex].Age,
                Course: dataFromStu.ans1[stuIndex].Course,
                Batch: dataFromStu.ans1[stuIndex].Batch
            }
        function handleChange(e){
            onObj[e.target.name]=e.target.value
        }

        function handleUpadate(){
            dataFromStu.ans1[stuIndex]=onObj

            changeLink('/student')

        }


    return(
        <div className="inputPage">
           
            {/* <label>Name</label> */}
            <input type="text" name="Name" placeholder={dataFromStu.ans1[stuIndex].Name} onChange={handleChange}/><br/>
            {/* <lable>Age</lable> */}
            <input type="number" name="Age" placeholder={dataFromStu.ans1[stuIndex].Age} onChange={handleChange}/><br/>
            {/* <label>Course</label> */}
            <input type="text" name="Course" placeholder={dataFromStu.ans1[stuIndex].Course} onChange={handleChange}/><br/>
            {/* <label>Batch</label> */}
            <input type="text" name="Batch" placeholder={dataFromStu.ans1[stuIndex].Batch} onChange={handleChange}/><br></br>
            <button   className="button1" onClick={()=>changeLink('/student')}>Cancel</button>
            <button  className="button1" onClick={handleUpadate}>Update</button>

        </div>
    )
}
