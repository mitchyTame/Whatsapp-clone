import React, {useEffect, useState} from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from "pusher-js";
import axios from './axios';

function App() {

  const [messages,setMessages] = useState([])

  useEffect(() => {
    axios.get('/messages/sync')
    .then(response => {
      setMessages(response.data);
    })
  },[])

  useEffect(() => {
    const pusher = new Pusher(process.env.Pusher_ID, {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      setMessages([...messages,data])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
    
  },[messages])

  return (
    <div className="app">
      <div className="app__body">
        {/* Sidebar component */}
        <Sidebar />
        {/* Chat component */}
        <Chat messages = {messages}  />
      </div>
    </div>
  );
}

export default App;
