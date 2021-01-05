import React from 'react'
import './DisplayTask.css'
import  { ImCross } from 'react-icons/im'

const DisplayTask = ({type, id, item, onDeleteTask}) => {

    if (type === "urgent") {
        return (
            <div className="task-box urgent-task">
                <h4>{item}</h4>
                <ImCross style = {{ color: 'rgb(230, 14, 14)', height: '10px', cursor: 'pointer' }} onClick={() => onDeleteTask(type, id)} />
            </div>
        )
    } else if (type === "default") {
        return (
            <div className="task-box default-task">
                <h4>{item}</h4>
                <ImCross style = {{ color: 'rgb(83, 83, 83)', height: '10px', cursor: 'pointer' }} onClick={() => onDeleteTask(type, id)} />
            </div>
        )
    } else if (type === "small") {
        return(
            <div className="task-box small-task">
                <h4>{item}</h4>
                <ImCross style = {{ color: 'rgb(8, 119, 54)', height: '10px', cursor: 'pointer' }} onClick={() => onDeleteTask(type, id)} />
            </div>
        )
    }
    
}

export default DisplayTask
