import React,{useState} from 'react'

const Listas = () => {
    const array=[
    {id:1, texto:'tarea1'},
    {id:2, texto:'tarea2'},
    {id:3, texto:'tarea3'}
]
    const [ arr,setArr ] =useState(array)
    const addTask=()=>{
        console.log(arr);
        setArr([
            ...arr,{id:4, texto:'tarea4'}
            
            
        ])
    }
  return (
    <div> 
     
        {
            arr.map( (item,index)=> <h2 key={index} >las tareas son : {item.texto}</h2>)
         
        }
           <button onClick={()=>addTask()}>add task</button>
    </div>
  )
}

export default Listas