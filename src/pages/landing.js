import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, EnterButton } from '../components/'

export const Landing = () => {
  const [isEnterClicked, setEnterClicked] = useState(false);
  return (
    <div className="landing-page">
      <div className={`site-title ${isEnterClicked && "title-open-animation"}`}>jozujanai</div>
      { (() => isEnterClicked ?
           <div>
            <div className="scroll-open-animation"/> 
            <div className="scroll-open-animation-drop"/>
           </div>
           : <EnterButton update={setEnterClicked}/> )()}
    </div>
  )
}

Landing.propTypes = {
}

export default Landing