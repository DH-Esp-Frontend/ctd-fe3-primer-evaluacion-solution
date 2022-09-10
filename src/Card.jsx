import React from 'react'

//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario 

const Card = ({name, course}) => {
  return (
    <div className='card'>
      <h3>Estudiante añadido correctamente</h3>
      <p>Nombre: {name}</p>
      <code>Curso: {course}</code>
    </div>
  )
}

export default Card