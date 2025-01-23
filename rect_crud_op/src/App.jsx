// import React from 'react'
import { useState } from "react"
import AddStudent from "./components/addStudent"
import DisplayStudent from "./components/DisplayStudent";
import api from "./api/api";

const App = () => {
  const [student ,setStudent] = useState({
    "id": Date.now().toString(),
    "name" : "",
     "age" : "",
     "address" : {
      "Area": "",
      "city": "",
      "pincode": ""
     },
     "std":""
  });
  const [refreshData, setRefreshData] = useState(false);

  async function handleFormdata(e){
    e.preventDefault();
    await api.post("",student);
    setRefreshData((prev)=>!prev)
}


  return (
    <>
      < AddStudent setStudent={setStudent} student={student} handleFormdata={handleFormdata} />
      < DisplayStudent refreshData={refreshData} setRefreshData={setRefreshData} />
    </>
  )
}

export default App