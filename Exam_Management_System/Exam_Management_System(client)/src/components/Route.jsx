// import React from 'react'

import { Route, Routes } from "react-router-dom"
import AddQuestion from "./AddQuestion"
import AddCategory from "./AddCategory"

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path="/AddQuestion"  element={< AddQuestion />} />
            <Route path="/AddCategory"  element={< AddCategory />} />
        </Routes>
    </div>
  )
}

export default Router