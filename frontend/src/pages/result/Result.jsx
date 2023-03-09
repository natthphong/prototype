import React from 'react'
import BodyResult from '../component/BodyResult/BodyResult'
import Footer1 from '../component/footer/Footer1'
import Header from '../component/Header/Header'
import './r.css'
export default function Result() {
  return (
    <div>
           <Header/>
           <BodyResult/>

           <Footer1 page={"2"}/>
    </div>
  )
}
