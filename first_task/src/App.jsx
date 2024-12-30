import { useState } from "react";
import { InputComponent } from "./components/InputComponent";
import { DisplayComponent } from "./components/DisplayComponent";

export const App = () => {
    let [userData , updateUserData] = useState("");    //LUS
    // let users = [];
    // if(userData != "" || userData != null || userData != null ){
    //     users.push(userData)
    // }
    // if(users[0]== ""){
    //     users.pop();
    // }
    // console.log(users)
    return (<>
        <InputComponent updateUserData={updateUserData} />
        <DisplayComponent user={userData} />
    </>)
};