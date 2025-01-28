import { useState } from "react";
import api from "../services/handleData"; // Import your API handler
import { toast, ToastContainer, Flip } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddQuestion.css"
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [formdata, setFormData] = useState({
    categoryName: "",
    description: "",
    startTime: "",
    endTime: "",
  });

  const navigate = useNavigate();

  const handleInputData = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormData = async (e) => {
    e.preventDefault();
    try {
      let {categoryName} = formdata
      if(categoryName.length < 1){
        return toast.error("Fill The Required Data", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          transition: Flip,
          style: {
            backgroundColor: 'rgb(230, 195, 195)',  // Set background color to red
            color: 'Red',  // Text color red for contrast
          },
        });
      }
      const res = await api.post("/examCategory/add", formdata); // Replace with your API endpoint
      if (res?.data?.message === "Category created successfully!") {
        toast.success("Category added successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: Flip,
        });
        // Reset form after successful submission
        setFormData({
          categoryName: "",
          description: "",
          startTime: "",
          endTime: "",
        });
        // setTimeout(()=>{
        //   navigate("/AddQuestion");
        // },1000)
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Flip,
        style: {
          backgroundColor: 'rgb(230, 195, 195)',  // Set background color to red
          color: 'Red',  // Text color red for contrast
        },
      });
    }
    // console.log(formdata);
  };

  return (
    <div className="container mt-5 mb-3">
      <Navbar/>
      <h2>Add New Category</h2>

      <form onSubmit={handleFormData}>
        {/* Category Name */}
        <div className="form-group">
          <label>Category Name</label>
          <input
            type="text"
            className="form-control"
            id="categoryName"
            name="categoryName"
            placeholder="Enter category name"
            value={formdata.categoryName}
            onChange={handleInputData}
          />
        </div>

        {/* Description */}
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            placeholder="Enter category description"
            value={formdata.description}
            onChange={handleInputData}
          />
        </div>

        {/* Start Time */}
        <div className="form-group">
          <label>Start Time</label>
          <input
            type="datetime-local"
            className="form-control"
            id="startTime"
            name="startTime"
            value={formdata.startTime}
            onChange={handleInputData}
          />
        </div>

        {/* End Time */}
        <div className="form-group">
          <label>End Time</label>
          <input
            type="datetime-local"
            className="form-control"
            id="endTime"
            name="endTime"
            value={formdata.endTime}
            onChange={handleInputData}
          />
        </div>

        {/* Submit Button */}
        {/* <button type="submit" className="btn btn-primary float-right">
          Add Category
        </button> */}
        <button type="submit" className="btn btn-primary float-right">
          Add Category
        </button><br /><br /><br />
      </form>

      {/* ToastContainer for notifications */}
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Flip}
      />
    </div>
  );
};

export default AddCategory;
