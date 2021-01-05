import React from 'react'
import './ChatListItem.css'

const ChatListItem = ({onClick, active, data}) => {
    return (
        <div 
            className={`chatListItem ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            <img className="chatListItem--avatar" src={data.item} alt="" />

            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">{data.title}</div>
                    <div className="chatListItem--date">19:00h</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>{data.lastMessage}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatListItem