// import React from 'react'

import { Route, Routes } from "react-router-dom"
import AddCategory from "./AddCategory"
import AddQuestion from "./AddQuestion"
import DisplayQuestions from "./DisplayQuestions"

// import { Route, Routes } from "react-router-dom"
// import AddQuestion from "./AddQuestion"
// import AddCategory from "./AddCategory"

// const Router = () => {
//   return (
//     <div>
//         <Routes>
//             <Route path="/AddQuestion"  element={< AddQuestion />} />
//             <Route path="/AddCategory"  element={< AddCategory />} />
//         </Routes>
//     </div>
//   )
// }

// export default Router


const RouteBar = () => {
  return (
    <div>
      <Routes>
        <Route path="/AddCategory" element={< AddCategory />} />
        <Route path="/AddQuestion" element={< AddQuestion />} />
        <Route path="/" element={< DisplayQuestions />} />
      </Routes>
    </div>
  )
}

export default RouteBar