import React from 'react'
import {langConfig} from './utils/LangConfig'

const About = ({lang}) => {
  const language = langConfig[lang]
  return (
    <div>{lang}
      <h3>{language.about}</h3>
      <p>{language.desc1}
      </p>
      <h3>{language.mission}</h3>
      <p>{language.desc2}</p>
<h3>{language.heading}</h3>
<p>{language.desc3}</p>
    </div>
  )
}

export default About