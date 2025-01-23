// import React from 'react'

import { useEffect, useState } from "react";
import api from "../api/api"
import Card from "./Card";

const DisplayStudent = ({refreshData , setRefreshData , setStudent , setUpdateFlag}) => {

    const [displayData , setDisplayData] = useState([]);

    useEffect(()=>{
        (async function getStudentData() {
            let studentData = await api.get();
            // console.log(studentData.data);
            setDisplayData(studentData.data)
        })()
    },[refreshData])

    async function deleteData(id){
       await api.delete(`/${id}`);
       return setRefreshData((prev)=>!prev)
    }
    
    async function updateData(id){
      let studentData = await api.get(`/${id}`);
       setStudent(studentData.data)
       setUpdateFlag((prev)=>!prev)
    }


  return (
    <>
        < Card  displayData={displayData} deleteData={deleteData} updateData={updateData} />
    </>
  )
}

export default DisplayStudent