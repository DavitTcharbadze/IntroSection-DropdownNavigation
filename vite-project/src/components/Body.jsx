import React from 'react'
import classes from '../modules/Body.module.scss'
import MainImg from '../assets/images/image-hero-desktop.png'

export default function Body() {
  return (
    <div className={classes['body-wrapper']}>
      <h1 className={classes['body-title']}>Make <br /> remote work</h1> <br /> <br /> <br />

      <p className={classes['body-paragraph']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Tempora numquam  voluptatibus quis blanditiis deleniti? <br /> Impedit necessitatibus mollitia consequatur tenetur dignissimos!</p>

      <button className={classes['body-button']}> <b> <h2>Learn more</h2> </b> </button>

      <img className={classes['body-image']} src={MainImg} alt="" />
    </div>
  )
}
