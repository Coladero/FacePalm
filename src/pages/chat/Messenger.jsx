import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getAllMessagesServices } from '../../services/chat.services'

function Messenger() {

  const [allMessages, setAllMessages] = useState([])
  const [text, setText] = useState("")
  const {chatId} = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    getAllMessages()
  },[])

  const getAllMessages = async () =>{
    try{
      const response = await getAllMessagesServices(chatId)
      setAllMessages(response.data)

    }catch(err){
      navigate("/error")
    }
  }

  const handleMessage = (e) =>{
    setText(e.target.value)
  }

  const sendMessage = () =>{
    console.log("Sending message")
  }
  return (
    <div>Chat

      {allMessages.map((eachMessage)=>{
        return(
          <div key={eachMessage._id}>
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