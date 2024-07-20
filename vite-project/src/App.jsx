import { useState } from 'react'
import classes from './modules/App.module.scss'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
function App() {

  return (
    <div className={classes['main-wrapper']}>
      <div className={classes['header']}>
        <Header />
      </div>
      <div className={classes['main-section']}>
        <Body/>
      </div>
    </div>
  )
}

export default App
