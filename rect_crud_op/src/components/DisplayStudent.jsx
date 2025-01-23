// import React from 'react'

import { useEffect, useState } from "react";
import api from "../api/api"
import Card from "./Card";

const DisplayStudent = ({refreshData , setRefreshData}) => {

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
       setRefreshData((prev)=>!prev)
    }

  return (
    <>
        < Card  displayData={displayData} deleteData={deleteData} />
    </>
  )
}

export default DisplayStudent