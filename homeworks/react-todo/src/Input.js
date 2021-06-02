import {useState} from 'react'
import './Input.css'

function Input({title, addTodo}) {
    const [todo, setTodo] = useState({
        id:'',
        task: '',
        competed: false
    })

    function handleChange (e) {
        setTodo({...todo, task: e.target.value})
    }

    function handleSubmit (e) {
        e.preventDefault()
        if (todo.task.trim()) {
            addTodo({...todo, id: new Date()})
            setTodo({...todo, task:''})

        }

        
    }

    return (
        <form onSubmit={handleSubmit} >
            <input 
                name='task'
                type='text'
                value={todo.task}
                onChange={handleChange}


            
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Input