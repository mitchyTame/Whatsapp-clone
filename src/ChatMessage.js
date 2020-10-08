import React from 'react'
import './ChatMessage.css'

function ChatMessage({messages}) {
    return (
        <div>
          {messages.map((message) => (
             <p className={`chatMessage__message ${message.received && 'chatMessage__receiver'}`}>
             <span className="chatMessage__name">{message.name}</span>
              {message.message}
             <span className="chatMessage__timestamp">{message.timesamp}</span>
           </p>
    ))}
    </div>
    )
}

export default ChatMessage
