import React, { useEffect, useState } from 'react'
import "../../css/Chat.css"
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
    connectToSocket()
  },[])

  const connectToSocket = () =>{
    const storedToken = localStorage.getItem("authToken")
    socket = socketIo.connect(process.env.REACT_APP_SOCKET_URL, {
      extraHeaders: {Authorization: `bearer ${storedToken}`}
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

  const sendMessage = (e) =>{
    e.preventDefault()
    console.log("Sending message")
    const messageObject = {text, chatId}
    socket.emit("send_message", messageObject)
    setText("")
  }
  return (
    <div>Chat

      {allMessages.map((eachMessage)=>{
        {/* console.log(eachMessage.sender.name) */}
        return(
          <div className="bubbleWrapper">
          <div classNAme="inlineContainer">
          <div  key={eachMessage._id}>
            <p className="ownBubble own">{eachMessage.sender.name}: {eachMessage.text}</p>
          </div>
          </div>
          </div>
        )
      })}
      <div className='bottom'>
      <form className='form'>
      <div className='sendMess'>
        <textarea rows="2" cols="70" type="text" placeholder='Write message here...' name={text} onChange={handleMessage} />
        <button  onClick={sendMessage}><ion-icon name="send"></ion-icon></button>
      </div>
      </form>
      </div>
    </div>

  )
}

export default Messenger