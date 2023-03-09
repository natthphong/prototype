import React from 'react'
import Faq from '../faq/Faq'
import Mailist from '../mail/Mailist';
import About from './../about/About'
import './f.css'
export default function Footer1({page}) {
    if (page ==="1") {
        return <div className="footer450"><Faq/><About/><Mailist/></div>;
      } else {
        return <div className="footer200"><Faq/><About/><Mailist/></div>;
      }
    }

