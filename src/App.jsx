import { useState, useEffect } from 'react'
import './App.css'
import ToDoList from './components/list/ToDoList'
import { getAllToDo, addToDo, updateToDo, deleteToDo } from './utils/HandleApi'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState('')
  const [updating, setUpdating] = useState(false)
  const [toDoId, setToDoId] = useState('')

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  const updateMode = (_id, text) => {
    setUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  const handleAddToDo = () => {
    if (text.trim() !== '') {
      if (updating) {
        updateToDo({ _id: toDoId, text }, setToDo, setText, setUpdating);
      } else {
        addToDo(text, setText, setToDo);
      }
    } else {
      // alert('Por favor, digite algo antes de adicionar uma tarefa.')
      toast.warn('Digite uma tarefa!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  };


  return (
    <>
      <div className='container'>
        <h1>ToDo App</h1>

        <div className="top">

          <input type="text"
            placeholder='Adicione uma tarefa...'
            value={text}
            onChange={(e) => setText(e.target.value)}

          />

          {/* <span className='add'
            onClick={updating ?
              () => updateToDo({ _id: toDoId, text }, setToDo, setText, setUpdating) :
              () => addToDo(text, setText, setToDo)}>
            {updating ? '↻' : '+'}
          </span> */}
          <span className='add'
            onClick={handleAddToDo}>
            {updating ? '↻' : '+'}
          </span>


          <div className="list">
            {toDo.map((item) => <ToDoList key={item._id} text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => deleteToDo(item._id, setToDo)} />)}
          </div>

        </div>
      </div>
    </>
  )
}

export default App
