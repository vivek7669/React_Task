// import React from 'react'

import { useEffect, useState } from "react"
import api from "../services/handleData";

const CategoryQuestion = () => {
    
    let [data,setData] = useState([]);

    useEffect(()=>{

        (async function getCateData(){
            let res = await api.get();
            setData(res);
        })()
    },[])
    console.log(data.data)

  return (
    <div>CategoryQuestion</div>
  )
}

export default CategoryQuestion