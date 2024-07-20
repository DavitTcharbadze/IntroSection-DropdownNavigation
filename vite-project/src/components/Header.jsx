import React, { useDebugValue } from 'react'
import classes from '../modules/Header.module.scss'
import { useState } from 'react'
// import ToDo from '../assets/images/icon-todo.svg'
// import Calendar from '../assets/images/icon-calendar.svg'
// import Reminder from '../assets/images/icon-reminders.svg'
// import Planning from '../assets/images/icon-planning.svg'

export default function Header() {

  const [showFeature, setShowFeature] = useState(false)
  const [showCompany, setShowCompany] = useState(false)

  const onFeatureHandler = () => {
    setShowFeature(true)
  }
  const onCompanyHandler = () => {
    setShowCompany(true)
  }
  const onFeatureCloseHandler = () => {
    setShowFeature(false)
    
  }
  const onCompanyCloseHandler = () => {
    setShowCompany(false)
  }
  return (
    <div className={classes['header-wrapper']}>
      <nav>
        <b><h1>snap</h1></b>

        <div className={classes['Features']}>
            <h2 onClick={onFeatureHandler}>Features</h2>
            {showFeature === true && (
              <div className={classes['feature-modal']}>
                  <div className={classes['todo-list']}>
                    <p>Todo List</p>
                  </div>
                  <div className={classes['calendar']}>
                    <p>Calendar</p>
                  </div>
                  <div className={classes['reminder']}>
                    <p>reminders</p>
                  </div>
                  <div className={classes['planning']}>
                    <p>Planning</p>
                  </div>
                  <button onClick={onFeatureCloseHandler}>X</button>
              </div>
            )}
            <h2 onClick={onCompanyHandler}>Company</h2>
            {showCompany === true && (
              <div className={classes['company-modal']}>
                <h3 className={classes['history']}>History</h3>
                <h3 className={classes['team']}>Our Team</h3>
                <h3 className={classes['blog']}> Blog</h3>
                <button onClick={onCompanyCloseHandler}>X</button>
              </div>
            )}
            <h2>Careers</h2>
            <h2>About</h2>
        </div>

        <div className={classes['buttons']}>
            <button className={classes['button']}> <h2>Login</h2> </button>
            <button className={classes['button']}> <h2>Register</h2> </button>
        </div>
      </nav>
    </div>
  )
}
