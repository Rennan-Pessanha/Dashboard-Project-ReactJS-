import React from 'react'
import * as C from './Style.js'
import DashBar from '../DashBar/index.js'
import DashScatter from '../DashScatter/index.js'



export const Dash = () => {
  return (
    <div>
        <C.DashC1> 
            <C.Title1> <h3>Barras</h3> </C.Title1>
            <C.Info />
            <C.Barra> <DashBar /> </C.Barra>
            

        </C.DashC1>
        <C.DashC2> 
        <C.Title1> <h3>Scatter</h3> </C.Title1>
        <C.Info />
        <C.Scatter> <DashScatter /> </C.Scatter>
        </C.DashC2>


    </div>
  )
}

export default Dash