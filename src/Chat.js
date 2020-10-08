import { IconButton, Avatar } from "@material-ui/core";
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import "./Chat.css";
import ChatMessage from "./ChatMessage";
import axios from './axios'

function Chat({messages}) {

  const[input, setInput] = useState("");

  const sendMessage = async(e) => {
    e.preventDefault();

   await axios.post('/messages/new', {
      message: input,
      name: 'Demo App',
      timestamp: 'Sent Now',
      received: true
    })

    setInput('');
  }
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen today</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
      <ChatMessage messages={messages}/>
      </div>
      <div className="chat__footer">
          <IconButton>
          <InsertEmoticon />
          </IconButton>
          <form>
              <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text"/>
              <button onClick={sendMessage} type="submit">Send a message</button>
          </form>
          <IconButton>
          <Mic />
          </IconButton>
      </div>
    </div>
  );
}

export default Chat;
