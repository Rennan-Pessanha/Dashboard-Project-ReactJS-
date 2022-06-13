import React from 'react'
import Global from './Styles/global'
import Header from './Components/Header'
import SubHeader from './Components/Sub-Header'
import Dash from './Components/Dashboard'

const App = () => {
  return (
    <div>
    <Header />
    <SubHeader />
    <Dash />
    <Global />
    </div>
  )
}

export default App