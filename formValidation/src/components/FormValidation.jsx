import  { useState } from 'react';

const FormValidate = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState({
    username :"",
    email : ""
  });
//   console.log(error);
  const [button , setbutton] = useState(true);

  const handleInput = (e) =>{
        const {name,value} = e.target;
        console.log(name ,value); 
        if(name == "username"){
            setName(value)
            if(value.length < 3 ){
                setbutton(true)
                setError((prev)=>({...prev , [name]:"Name Is Required"}))
            } 
           else{
                if(error?.email?.length < 3 ){
                  setbutton(true)
                }
                else{
                  setbutton(false)
                }
                setError((prev)=>({...prev , username:''}))
            }
        }
        if(name == "email"){

            setEmail(value)
            if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)){
                setbutton(false)
                setError((prev)=>({...prev , email:''}))
            }
            else{
                setbutton(true)
                setError((prev)=>({...prev , [name]:"Email Is Required"}))
            }
        }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!username.trim()) {
      setError('Name is required');
    } else {
    //   setError('');
      alert(`Name: ${username}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">User Form</h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Name"
            className={`w-full p-3 border rounded-lg }`}
            value={username}
            name ="username"
            onChange={(e) => handleInput(e)}
            autoComplete="off"
          />
           {error?.username && <p className="text-red-500 text-sm mt-1">{error?.username}</p>}
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Email"
            className={`w-full p-3 border rounded-lg }`}
            value={email}
            name ="email"
            onChange={(e) => handleInput(e)}
            autoComplete="off"
          />
          {error?.email && <p className="text-red-500 text-sm mt-1">{error?.email}</p>}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-500 disabled:text-white" disabled={button}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormValidate;
