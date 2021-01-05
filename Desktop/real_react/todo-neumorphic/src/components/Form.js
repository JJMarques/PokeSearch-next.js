import React from 'react'
import './Form.css'
import { RiSendPlane2Fill } from 'react-icons/ri'

const Form = ({ taskType,settaskType, searchInput, setSearchInput, onSubmitTask }) => {
    return (
        <form onSubmit={onSubmitTask}>
            <input 
                onChange={(e) => setSearchInput(e.target.value)}
                autoFocus
                type="text"  
            />
            <div className="checks">

                <label htmlFor="default" className="default">
                    <input 
                        className="radio-default"
                        type="radio"
                        value="default"
                        checked={taskType === "default" ? true : false}
                        onChange={(e) => settaskType(e.target.value)}
                    />
                Default</label>  

                <label htmlFor="urgent" className="urgent">
                    <input 
                        className="radio-urgent"
                        type="radio"
                        value="urgent"
                        checked={taskType === "urgent" ? true : false}
                        onChange={(e) => settaskType(e.target.value)}
                    />
                Urgent</label>  

                <label htmlFor="small" className="small-task">
                    <input 
                        className="radio-small"
                        type="radio"
                        value="small-task"
                        checked={taskType === "small-task" ? true : false}
                        onChange={(e) => settaskType(e.target.value)}
                    /> 
                Small task</label> 
                <button 
                    className="btn-submit"
                    type="submit"

                >
                    <RiSendPlane2Fill style={{width: '25px', height: 'auto', color: 'rgb(8, 119, 54)'}} />
                </button>

            </div>

        </form>
    )
}

export default Form
