import React from 'react'
import './MessageItem.css'

const MessageItem = ({data, user}) => {
    return (
        <div 
            className="messageLine"
            style={{
                justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'
            }}
        >
            <div 
                className="messageItem"
                style={{
                    backgroundColor: user.id === data.author ? '#DCF8C6' : '#FFF'
                }}
            >
                <div className="messageText">{data.body}</div>
                <div className="messageDate">19:00h</div>
            </div>
        </div>
    )
}

export default MessageItem
