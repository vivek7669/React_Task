// import React from 'react'

const Card = ({displayData,deleteData,updateData}) => {
  return (
   <div className="hello">
     { displayData.map((elm)=>(
        // console.log(elm)
        <div className="innerContainer" key={elm.id} >
            <h4>Name : {elm?.name}</h4>
            <h4>Age : {elm?.age}</h4>
            <h4>Std : {elm?.std}</h4>
            <h4>Address : {elm?.address?.Area},{elm?.address?.city},{elm?.address?.pincode}</h4>
            <button onClick={()=>updateData(elm.id)}>Update</button>
            <button onClick={()=>deleteData(elm.id)} >Delete</button>
        </div>
    ))}
   </div>
  )
}

export default Card