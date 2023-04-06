import { useState } from "react"


export default function () {
    const [todo, setTodo] = useState("")
    function clickHandler() {
        if (!todo) {
            alert("Please enter a text");
            return; //stops your code from running
        }
        //    setTodos([...todos, todo]);
        setTodo("");
    }

    return <>
        <div className="Todolist">
            <div className="todolist-header d-flex justify-content-center w-75 p-5 mx-auto mt-3 border rounded">
                <input value={todo} onChange={e => setTodo(e.target.value)} className="w-75 px-2 py-3 fs-5 me-3 rounded" type="text" placeholder="Enter New Todo" />
                <button onClick={clickHandler} className="btn btn-primary w-25 px-2 py-3 fs-5 rounded">Add Todo</button>
</div>            
</div>        
    </>
}