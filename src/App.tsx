import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Input} from "./components/Input";

type TodosType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {
    const [todos, setTodos] = useState<TodosType[]>([])
    let title= useRef<HTMLInputElement>(null)
    console.log(todos);


    const fetchQuery=()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => {
        fetchQuery()
    }, [])

    const showHandler = () => {
        fetchQuery()
    }

    const hideHandler = () => {
        setTodos([])
    }
const addTodo=()=>{

    if(title.current){
        const todo = {userId:100200,id: todos.length+1,title:title.current.value, completed:false}
        setTodos([todo,...todos]);
        title.current.value=""
    }

}
    return (
        <div className="App">

            <Button name={'Show me todos'} callBack={showHandler}/>
            <Button name={'Hide todos'} callBack={hideHandler}/>
            <div>
                <Input title={title} />
                <Button name={'+'} callBack={addTodo}/>
            </div>

            <ul>
                {todos.map(el => {
                    return (
                        <li>
                            <input type="checkbox" name="myCheckbox" checked={el.completed}/>
                            <span>{el.id} - </span>
                            <span> {el.title} - </span>

                        </li>
                    )
                })}
            </ul>


        </div>
    );
}

export default App;