import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {getAllUsersService, newChatService} from "../../services/chat.services"

function UserList() {
    //!Line8, useState
    const [users, setUsers] = useState(null);

    //!Line11, useNavigate
    const navigate = useNavigate()

    //!Line14, useEffect
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
      <div>
      <h1>Users List</h1>    
      </div>
    {users.map((eachUser)=>{
        return(
        <div className='user-list' key={eachUser._id}>
        <form className='user-card'>
            <p><strong>Name: </strong>{eachUser.name}</p>
            <Button variant='text' onClick={() => handleClick(eachUser)}>Start Chat</Button>
        </form>
        </div>
        
        )
    })}
    </div>
  )
}

export default UserList