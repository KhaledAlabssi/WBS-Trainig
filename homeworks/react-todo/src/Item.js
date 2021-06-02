import List from './List'
function Item ({title, todo}) {

    

    return (
        <div>
            <li>{title}</li>
            <input type='checkbox' />
            <li>{todo}</li>
            <button>X</button>


        </div>
        
        
    )
}

export default Item