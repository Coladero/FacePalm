import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {getAllUsersService, newChatService} from "../../services/chat.services"
function UserList() {
    //!Line6, useState
    const [users, setUsers] = useState(null);

    //!Line9, useNavigate
    const navigate = useNavigate()

    //!Line12, useEffect
    useEffect(()=>{
        getAllUsers()
    },[])

    const getAllUsers = async () =>{
        try{
            const response = await getAllUsersService()
            setUsers(response.data)
        }catch(err){
            navigate("/error");
        }
    };

    const handleClick = async (user) =>{
        console.log(`try to get a chat with ${user.name}`)
        try{
            const response = await newChatService(user._id)
            navigate(`/messenger/${response.data._id}`)
        }catch{
            navigate("/error")
        }
    }
    if(!users){
        return <div>...Loading</div>
    }
  return (
    <div>
    <h1>Users List</h1>
    {users.map((eachUser)=>{
        return(
        <div key={eachUser._id}>
            <p><strong>Name: </strong>{eachUser.name}</p>
            <button onClick={() => handleClick(eachUser)}>Start Chat</button>
        </div>
        )
    })}
    </div>
  )
}

export default UserList