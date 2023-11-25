import axios from 'axios'

const baseUrl = "https://todoapp-node-mongo-backend.onrender.com"


export const getAllToDo = (setToDo) => {
    axios.get(baseUrl).then(({ data }) => {
        console.log("data --->", data);
        setToDo(data)
    })
}

export const addToDo = (text, setText, setToDo) => {
    console.log('Adicionando tarefa...');
    axios.post(`${baseUrl}/criar`, { text }).then((data) => {
        console.log(data);
        setText('')
        getAllToDo(setToDo)
        console.log('Tarefa adicionada com sucesso!')
    }).catch((error) => console.log(error))

}

export const updateToDo = ({ _id, text }, setToDo, setText, setUpdating) => {
    console.log(`Atualizando tarefa com id: ${_id}`);
    axios.put(`${baseUrl}/atualizar`, { _id, text }).then((data) => {
        console.log(data);
        setText('')
        setUpdating(false)
        getAllToDo(setToDo)
        console.log('Tarefa atualizada com sucesso!')
    }).catch((error) => console.log(error))
}

export const deleteToDo = (_id, setToDo) => {
    console.log(`Deletando tarefa com id: ${_id}`);
    axios.delete(`${baseUrl}/deletar`, { data: { _id } }).then((data) => {
        console.log(data);
        getAllToDo(setToDo)
        console.log('Tarefa deletada com sucesso!')
    }).catch((error) => console.log(error))

}




