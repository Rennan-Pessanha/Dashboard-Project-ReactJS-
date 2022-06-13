import React from 'react'
import * as C from './Styles.js'


export const SubHeader = () => {
  return (
    <div>
        <C.Title> <h1>Dashboard</h1> </C.Title>   
        <C.filter>
           <C.Filtro> <C.Filtrar> <h4>Filtrar</h4> </C.Filtrar> </C.Filtro>
        </C.filter>
    </div>
  )
}

export default SubHeader
