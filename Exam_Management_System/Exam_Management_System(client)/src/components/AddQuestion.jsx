    // import React from 'react'
    import { useEffect } from "react";
    import "./AddQuestion.css";
    import api from "../services/handleData";
    import { useState } from "react";
    import "bootstrap/dist/css/bootstrap.min.css";
    import { Flip, toast, ToastContainer } from "react-toastify";
    import Navbar from "./Navbar";

    const AddQuestion = () => {
    let [categorys, setcategorys] = useState([{ id: "", categoryName: "" }]);
    let [formdata, setformdata] = useState({
        questionText: "",
        options: ["", "", "", ""],
        correctAnswer: "",
        marks: "",
        category: "",
        difficulty: "",
    });
    useEffect(() => {
        (async function retruveCategory() {
        let data = await api.get("/examCategory/");
        setcategorys(data.data.categories);
        })();
    }, []);

    const hndleFormData = async (e) => {
        e.preventDefault();
        let res;
        try {
        res = await api.post("/exam/add", formdata);
        } catch (error) {
        return toast.error(error?.response?.data?.message, {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            transition: Flip,
            style: {
            backgroundColor: 'rgb(230, 195, 195)', 
            color: 'Red'  
            }
        });
        }
        if (res?.data?.message == "Question added successfully!") {
            return toast.success("Question added successfully", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Flip,
                });
        }

        };

    const handleInputdata = (e) => {
        let { value, name } = e.target;
        if (name.startsWith("options")) {
        const optionIndex = Number(name.split("[")[1].split("]")[0]);
        setformdata((prev) => {
                    const updatedOptions = [...prev.options]; //destructure of array
                    updatedOptions[optionIndex] = value;
                    return { ...prev, options: updatedOptions };

        });
        } else {
        return setformdata((prev) => ({ ...prev, [name]: value }));
        }
    };

    return (
        <div className="container mt-5 mb-3">
            <Navbar/>
        <h2>Add Exam Question</h2>

        <form onSubmit={hndleFormData}>
            <div className="form-group">
            <label>Question Text</label>
            <input
                type="text"
                className="form-control"
                id="questionText"
                name="questionText"
                placeholder="Enter the question text"
                value={formdata?.questionText}
                onChange={handleInputdata}
            />
            </div>

            <div className="form-group">
            <label>Options (4)</label>
            <br />
            <input
                type="text"
                className="form-control mb-2"
                id="option1"
                name="options[0]"
                placeholder="Option A"
                value={formdata?.options[0]}
                onChange={handleInputdata}
            />
            <input
                type="text"
                className="form-control mb-2"
                id="option2"
                name="options[1]"
                placeholder="Option B"
                value={formdata?.options[1]}
                onChange={handleInputdata}
            />
            <input
                type="text"
                className="form-control mb-2"
                id="option3"
                name="options[2]"
                placeholder="Option C"
                value={formdata?.options[2]}
                onChange={handleInputdata}
            />
            <input
                type="text"
                className="form-control mb-2"
                id="option4"
                name="options[3]"
                placeholder="Option D"
                value={formdata?.options[3]}
                onChange={handleInputdata}
            />
            </div>

            <div className="form-group">
            <label>Correct Answer</label>
            <br />
            <select
                className="form-control"
                name="correctAnswer"
                onChange={handleInputdata}
            >
                <option className="text-secondary">Select Correct Option</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
            </select>
            </div>

            <div className="form-group">
            <label>Marks</label>
            <input
                type="number"
                className="form-control"
                id="marks"
                name="marks"
                min="1"
                placeholder="Enter marks"
                value={formdata?.marks}
                onChange={handleInputdata}
            />
            </div>

            <div className="form-group">
            <label>Category</label>
            <select
                className="form-control"
                id="category"
                name="category"
                onChange={handleInputdata}
            >
                {categorys.map((elm, index) => (
                <option key={elm._id || index} value={elm._id}>
                    {elm.categoryName}
                </option>
                ))}
            </select>
            </div>

            <div className="form-group">
            <label>Difficulty</label>
            <br />
            <input
                type="radio"
                id="easy"
                name="difficulty"
                value="easy"
                onChange={handleInputdata}
            />
            <label htmlFor="easy">Easy</label>
            <br />
            <input
                type="radio"
                id="medium"
                name="difficulty"
                value="medium"
                onChange={handleInputdata}
            />
            <label htmlFor="medium">Medium</label>
            <br />
            <input
                type="radio"
                id="hard"
                name="difficulty"
                value="hard"
                onChange={handleInputdata}
            />
            <label htmlFor="hard">Hard</label>
            </div>

            <button type="submit" className="btn btn-primary float-right">
            Add Question
            </button>
            <br /><br /><br />
        </form>

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

    export default AddQuestion;
