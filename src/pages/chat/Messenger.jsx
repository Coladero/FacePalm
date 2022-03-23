import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getAllMessagesServices } from '../../services/chat.services'
import socketIo from 'socket.io-client';
let socket;

function Messenger() {

  const [allMessages, setAllMessages] = useState([])
  const [text, setText] = useState("")
  const {chatId} = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    getAllMessages()
    ConnectToSocket()
  },[])

  const ConnectToSocket = () =>{
    const storedToken = localStorage.getItem("authToken")
    socket = socketIo.connect("http://localhost:5005", {
      extraHeaders: {authorization: `bearer ${storedToken}`}
    })

    socket.emit("join_chat", chatId)

    socket.on("receive_message", (newMessage) =>{
      setAllMessages(previousState => {
        return [...previousState, newMessage]
      })
    })
  }

  const getAllMessages = async () =>{
    try{
      const response = await getAllMessagesServices(chatId)
      setAllMessages(response.data)

    }catch(err){
      navigate("/error")
    }
  }

  const handleMessage = (e) =>{
    e.preventDefault()
    setText(e.target.value)
  }

  const sendMessage = () =>{
    console.log("Sending message")
    const messageObject = {text, chatId}
    socket.emit("send_message", messageObject)
    setText("")
  }
  return (
    <div>Chat

      {allMessages.map((eachMessage, index)=>{
        {/* console.log(eachMessage.sender.name) */}
        return(
          <div key={eachMessage._id + index}>
          <p>{eachMessage.sender.name}: {eachMessage.text}</p>
          </div>
        )
      })}
    
      <div>
      <input type="text" placeholder='Write message here...' name={text} onChange={handleMessage} />
      <button onClick={sendMessage}>Send</button>
      </div>
    </div>

  )
}

export default Messenger