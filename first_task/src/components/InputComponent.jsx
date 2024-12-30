import "../index.css"

export const InputComponent = ({updateUserData
}) => {


    
    function handleFormData(e){
        e.preventDefault();
        
        let formdata = new FormData(e.target);
        console.log(formdata.get('userimg'));
        
        let userDatas = {
            name : formdata.get('name'),
            age : formdata.get('age'),
            bio : formdata.get('bio'),
            location : formdata.get('location'), 
            profilepic : formdata.get('userimg')
        }
        
        updateUserData(userDatas);
        (userDatas.name == "" || userDatas.name == null)? alert("Welcome To Our Website !") : alert(`Welcome ${userDatas?.name} Our Website !`) ; 
    }

    return (<>
        <form action="" id="formdata" onSubmit={(e)=>handleFormData(e)} >
            <input type="text" name="name" className="border-black [border-width:0.4px] rounded bg-slate-100"  placeholder="Enter Your Name" /><br />
            <input type="number" name="age" className="border-black [border-width:0.4px] rounded bg-slate-100" placeholder="Enter Your Age" /><br />
            <textarea name="bio" className="border-black [border-width:0.4px] rounded bg-slate-100" placeholder="Enter Your Bio..."></textarea><br />
            <input type="text" name="location" className="border-black [border-width:0.4px] rounded bg-slate-100" placeholder="Enter Your Location" /><br />
            <input type="url" name="userimg" className="border-black [border-width:0.4px] rounded bg-slate-100" placeholder="Enter Your image" /><br />
            <input type="submit" value="Register" className="border-black [border-width:0.4px] rounded bg-green-800 px-1 mx-1 my-2 text-lime-50" />
        </form>
    </>)
}