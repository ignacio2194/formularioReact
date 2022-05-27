import React, { useState } from "react";

const Eventos = () => {

  const [texto, setTexto] = useState("enviar");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("")
  const [contraseña, setContraseña] = useState("")

  // estado para guardar todos los datos 
  const [datos, setDatos]= useState([])

// guardo todos los datos del usuario en un objeto y en su estado 
  const recibirUsuario = (e) => {
    setNombre(e.target.value);
 
  
  }
  const recibirEmail = (e) => {
    setEmail(e.target.value);
 
  }
  const recibirContraseña = (e) => {
    setContraseña(e.target.value);
   
  }
  const guardarDatos=(e)=>{
    e.preventDefault()
   
   if(!nombre.trim()){
    console.log('nombre vacio');
  
    return ;
   }
   if(!email.trim()){
    console.log('email vacio');
 return;
   }
   if(!contraseña.trim()){
    console.log('contraseña vacio');
 return; 
   }
   setDatos([
     ...datos,{
       nombre:nombre
      ,email:email,
      contraseña:contraseña
      }
   ])
   e.target.reset()
   setNombre('');
   setEmail('');
   setContraseña('');
   

  }
  const eventoClick = () => {
    setTimeout(() => {
      setTexto("enviando...");
      setTimeout(() => {
        setTexto("enviado♥");
        setTimeout(() => {
        
          setTexto("enviar");
        }, 1000);
      }, 2500);
    }, 2500);
  };
  return (
    <div >

      <form className="formulario" onSubmit={guardarDatos}>
        <input type="text" className="form-control mb-2" placeholder="usuario" onChange={recibirUsuario} />
        <input type="email" className="form-control mb-2" placeholder="email" onChange={recibirEmail} />
        <input type="password" className="form-control mb-2" placeholder="contraseña " onChange={recibirContraseña} />
        <button className="buttonEnviar btn btn-primary " onClick={eventoClick}  type='submit'>{texto}</button>
      </form>
     <>
     {
       datos.map((item,index)=> 
       <div className="lista" key={index}>
         {item.nombre}- {item.email}    
       </div>)
     }
     </>



    </div>
  );
};

export default Eventos;
