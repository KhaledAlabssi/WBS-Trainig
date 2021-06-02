import Item from './Item'

function List ({title, todos}) {

    return (
        
            <ul>
                <h1>{title}</h1>
                {todos.map(todo => (<Item
                    key={todo.id} todo={todo.task} />
                    
                    ))}
                
            </ul>
        
    )
}

export default List