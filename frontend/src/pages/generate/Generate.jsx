import React from 'react'
import BodyHome from '../component/Body/BodyHome'
import Chat from '../component/chat/Chat'
import Footer1 from '../component/footer/Footer1'
import Header from '../component/Header/Header'
import './gen.css'
export default function Generate() {
  return (
    <div>
      <Header/>
      <BodyHome/>

      <Footer1 page={"1"}/>
    </div>
  )
}
