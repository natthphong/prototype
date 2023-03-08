
import './header.css'
import React from 'react'

export default function Header() {
  return (
    <div className='headercl'>
        <div className="text1">

        <img src="./Logo.png" alt="" className='imglogo'/>
        <h1>Sport Recommend</h1>
        </div>
        
        <div className="text2">
            <a href="">FAQ |</a>
            <a href="">Blog |</a>
            <a href="">About |</a>
            <a href="">Contact |</a>
        </div>
    </div>
  )
}
