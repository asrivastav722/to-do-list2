function ListItem(props){
    function handleDelete(e){
        alert(document.getElementById("task").key);
    }
       



    return <li key={props.key} id="task" className="list">
        <h1 className="list-content">{props.text}</h1>
        <button className="btn-delete" onClick={(e)=>handleDelete(e)}>Delete</button>
        <button className="btn-up" >up</button>
        <button className="btn-down">down</button>
        </li>
}
export default ListItem