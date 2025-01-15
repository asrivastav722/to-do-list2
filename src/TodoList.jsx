import react,{useState} from "react";

function TodoList(){
    
    const [tasks,setTasks]=useState([]);
    const [newTask,setNewTask]=useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if (newTask.length!==0){
            setTasks( t =>[...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks= tasks.filter((element,i)=>i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if (index!==0){
            const updatedTasks= [...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    function moveTaskDown(index){
        if (tasks.length-1!==index){
            const updatedTasks= [...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return <div className="to-do-List">
            <header >
                    <h1>To-Do-List</h1>
                    <div className="inputbox">
                        <input  type="text" 
                                placeholder="Add a new task here..." 
                                value={newTask} 
                                onChange={handleInputChange}/>
                        <svg className="add-button"
                                onClick={addTask} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#3D3D3D"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                                
                    </div>
            </header>
            <div className="tasks">
                {tasks.map((task,index) =>
                    <section key={index} className="task"> 
                        <span className="text">{task}</span>
                        <div className="Buttons">
                            <svg className="but" onClick={()=> deleteTask(index)} xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#578E7E"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                            <svg className="but" onClick={()=> moveTaskUp(index)} xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#578E7E"><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/></svg>
                            <svg className="but" onClick={()=> moveTaskDown(index)} xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#578E7E"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>                        
                        </div>    
                    </section>
                )}
            </div>

    </div>
  
    
}

export default TodoList;