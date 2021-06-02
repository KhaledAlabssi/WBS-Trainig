import Item from './Item'
import './List.css'

function List ({todos}) {

    return (
        
            <ul>
                
                {todos.map(todo => (<Item
                    key={todo.id} todo={todo.task} />
                    
                    ))}
                
            </ul>
        
    )
}

export default List