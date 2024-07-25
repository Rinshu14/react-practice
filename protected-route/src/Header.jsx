import React from 'react'
import { Link } from 'react-router-dom'
import {langConfig} from './utils/LangConfig'

const Header = ({lang,setLang}) => {
    const language = langConfig[lang]
     console.log(language)
    return (
        <div style={{ display: "flex", justifyContent: "space-evenly", backgroundColor: "black", color: "white" }}>
           <a href="/">{language.home}</a>
           <a href="/about">{language.about}</a>
           <a href="/Contact">{language.contact}</a>
           <a href="/teams">{language.teams}</a>
           <a href="/login">{language.login}</a>
           <a href="/logout">{language.logout}</a>

           <select onChange={(event)=>{
            setLang(event.target.value)
           }}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>    
            <option value="sp">Spanish</option>    
            <option value="ru">Russian</option>    
           </select>
            {/* <p><Link to={"/"}> Home</Link> </p>
            <p><Link to={"/about"}>About</Link></p>
            <p><Link to={"/contact"}>Contact</Link></p>
            <p><Link to={"/teams"}>Teams</Link></p> */}
      {/* <p><Link to={"/login"}>Login</Link></p>
      <p><Link to={ "/logout"}>Logout</Link></p> */}
        </div>
    )
}

export default Header