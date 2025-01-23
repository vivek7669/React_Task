// import React from 'react'

const AddStudent = ({handleFormdata,setStudent,student}) => {

const handleInput = (e) => {
    let {name,value} = e.target;
    if(name == "Area" || name == "city" || name == "pincode"){
        setStudent((prev)=>{
            let oldLocationData = {...prev.address}
            oldLocationData[name] = value
            return {...prev , address : oldLocationData}
        })
    }
    else{
        return setStudent((prev)=>({...prev , [name] : value}))
    }
}

  return (
    <>
        <form onSubmit={handleFormdata}>
            <input type="text" placeholder="Enter Name..."  id="name" name="name" onChange={handleInput} value={student?.name || ""} />
            <input type="number" placeholder="Enter Age..."  id="age" name="age" onChange={handleInput} value={student?.age || ""} />
            <input type="text" placeholder="Enter Area..."  id="Area" name="Area" onChange={handleInput} value={student?.address?.Area || ""} />
            <input type="text" placeholder="Enter City..."  id="city" name="city" onChange={handleInput} value={student?.address?.city || ""} />
            <input type="number" placeholder="Enter Pincode..."  id="pincode" name="pincode" onChange={handleInput} value={student?.address?.pincode || ""} />
            <input type="text" placeholder="Enter Standerd..."  id="std" name="std" onChange={handleInput} value={student?.std || ""} />

            <input type="submit" value="Register" />
        </form>
    </>
  )
}

export default AddStudent