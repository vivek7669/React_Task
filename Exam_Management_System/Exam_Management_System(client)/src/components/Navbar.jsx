// import React from 'react'

import { Link } from "react-router-dom"

// import { Link } from "react-router-dom"

// const Navbar = () => {
//   return (
//     <div>
//         <Link to='/AddCategory'>
//             AddCategory
//         </Link>
//         <Link to='/AddQuestion'>
//             AddQuestion
//         </Link>
//     </div>
//   )
// }

// export default Navbar

const Navbar = () => {
  return (
    <div>
      <Link to="/AddCategory" className="px-2"> AddCategory </Link>
      <Link to="/AddQuestion" className="px-2"> AddQuestion </Link>
      <Link to="/" className="px-2"> DisplayQuestions </Link>
    </div>
  )
}

export default Navbar