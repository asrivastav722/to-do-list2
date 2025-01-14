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
        <h1>To-Do-List</h1>
        <div>
            <input  type="text" 
                    placeholder="Enter a task..." 
                    value={newTask} 
                    onChange={handleInputChange}/>
            <button className="add-button"
                    onClick={addTask}>
                    Add
            </button>
        </div>
        <ol>
            {tasks.map((task,index) =>
                <li key={index}> 
                    <span className="text">{task}</span>
                    <button 
                        className="delete-button"
                        onClick={()=> deleteTask(index)}>
                        Delete
                    </button>
                    <button 
                        className="move-button"
                        onClick={()=> moveTaskUp(index)}>
                        Up
                    </button>
                    <button 
                        className="move-button"
                        onClick={()=> moveTaskDown(index)}>
                        Down
                    </button>
                </li>
            )}
        </ol>

    </div>
  
    
}

export default TodoList;