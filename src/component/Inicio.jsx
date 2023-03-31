import React,{useEffect, useState} from 'react'
import {todosPersonajes} from '../funciones/funciones'
<link rel="stylesheet" href="./index.css"/>


const Inicio = () => {
  const [personajes, serPersonajes] =useState(null)
  useEffect(() => {
    todosPersonajes(serPersonajes)
  }, [])

  return (
    <>
      {personajes != null ? (
        personajes.map(personaje => (
          <div class="cuadro"  key={personaje.id}>
            <a href='#'>{personaje.name}</a>
            <img src={personaje.image} alt="" />
          </div>
        ))
      ) : ('no hay personajes') }
    </>
  )
}

export default Inicio