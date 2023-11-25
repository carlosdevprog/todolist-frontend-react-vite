import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
import PropTypes from 'prop-types';

const ToDoList = ({text, updateMode, deleteToDo}) => {
    return (
        <>
            <div className="todo">
                <div className="text">{text}</div>
                <div className="icons">
                    <BiEdit className='icon' onClick={updateMode}/>
                    <AiFillDelete className='icon' onClick={deleteToDo}/>
                </div>
            </div>
        </>
    )
}

ToDoList.propTypes ={
    text: PropTypes.string.isRequired,
    updateMode: PropTypes.func.isRequired,
    deleteToDo: PropTypes.func.isRequired,
}

export default ToDoList