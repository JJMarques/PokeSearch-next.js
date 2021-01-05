import { useState, useCallback } from 'react'
import './App.css'
import DisplayTask from './components/DisplayTask'
import Form from './components/Form'
import { AiOutlineDelete } from 'react-icons/ai'

function App() {

  const [searchInput, setSearchInput] = useState("")
  const [taskType, settaskType] = useState("default")
  const [, updateState] = useState();

  const [defaultTaskList, setDefaultTaskList] = useState([])
  const [urgentTaskList, setUrgentTaskList] = useState([])
  const [smallTaskList, setSmallTaskList] = useState([])

    const onSubmitTask = (e) => {
      if(searchInput !== "") {
        if (taskType === "default") {
          setDefaultTaskList([...defaultTaskList, searchInput])
        }
        if (taskType === "urgent") {
          setUrgentTaskList([...urgentTaskList, searchInput])
        }
        if (taskType === "small-task") {
          setSmallTaskList([...smallTaskList, searchInput])
        }
      }
      e.preventDefault()
    }

    const forceUpdate = useCallback(() => updateState({}), []);

    const onDeleteTask = (type, id) => {
      let newList
      if (type === "urgent") {
        newList = urgentTaskList
        newList.splice(id, 1)
        setUrgentTaskList(newList)
      } else if (type === "default") {
        newList = defaultTaskList
        newList.splice(id, 1)
        setDefaultTaskList(newList)
      } else if (type === "small") {
        newList = smallTaskList
        newList.splice(id, 1)
        setSmallTaskList(newList)
      }

      forceUpdate()
    }

    const deleteAllTasks = (type) => {
      if (type === "urgent") {
        urgentTaskList.length = 0
      }
      if (type === "default") {
        defaultTaskList.length = 0
      }
      if (type === "small") {
        smallTaskList.length = 0
      }

      forceUpdate()
    }

  return (
    <div className="app">
      <h1 className="title">To-do Neumorphic</h1>
      <h5>Objectives for today?</h5>
      <Form 
        taskType={taskType} 
        settaskType={settaskType}
        searchInput={searchInput}
        value={searchInput}
        setSearchInput={setSearchInput}
        onSubmitTask={onSubmitTask}
      />
      <div className="tasks-container">
    
        {urgentTaskList.length > 0 ? <h4 className="type urgent">Urgent tasks</h4> : <></>}
        {
          urgentTaskList.length > 0 ? 
              urgentTaskList.map((item, i) =>
                  <DisplayTask type={"urgent"} id={i} key={i} item={item} onDeleteTask={onDeleteTask} />
              ) 
          : 
            <></> 
        }
        {
          urgentTaskList.length > 0 ? 
          <h4 onClick={() => deleteAllTasks('urgent')} className="type urgent" style={{ cursor: 'pointer', fontSize: '13px', marginTop: '10px', marginBottom: '30px'}}> 
            <AiOutlineDelete style={{height: '12px', width: 'auto'}}/> Delete all urgent tasks
          </h4> 
          : <></>
        }


        {defaultTaskList.length > 0 ? <h4 className="type default"> Tasks</h4> : <></>}
        {
          defaultTaskList.length > 0 ? 
          defaultTaskList.map((item, i) =>
                  <DisplayTask type={"default"} id={i} key={i} item={item} onDeleteTask={onDeleteTask} />
              ) 
          : 
            <></> 
        }
        {
          defaultTaskList.length > 0 ? 
          <h4 onClick={() => deleteAllTasks('default')} className="type default" style={{ cursor: 'pointer', fontSize: '13px', marginTop: '10px', marginBottom: '30px'}}> 
            <AiOutlineDelete style={{height: '12px', width: 'auto'}}/> Delete all default tasks
          </h4> 
          : <></>
        }


        {smallTaskList.length > 0 ? <h4 className="type small-task"> Small tasks</h4> : <></>}
        {
          smallTaskList.length > 0 ? 
          smallTaskList.map((item, i) =>
                  <DisplayTask type={"small"} id={i} key={i} item={item} onDeleteTask={onDeleteTask} />
              ) 
          : 
            <></> 
        }     
        {
          smallTaskList.length > 0 ? 
          <h4 onClick={() => deleteAllTasks('small')} className="type small-task" style={{ cursor: 'pointer', fontSize: '13px', marginTop: '10px', marginBottom: '30px'}}> 
            <AiOutlineDelete style={{height: '12px', width: 'auto'}}/> Delete all small tasks
          </h4> 
          : <></>
        }   

      </div>
      
    </div>
  );
}

export default App;
