export const DisplayComponent = ({user : {name , age ,bio ,location , profilepic}}) => {
    
    return (<>
            <img src={profilepic} alt="" width="100px" />
            <h4>Name : {name}</h4>
            <h4>Age : {age}</h4>
            <h4>Bio : {bio}</h4>
            <h4>Location : {location}</h4>
    </>)
} 