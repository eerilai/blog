import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, EnterButton } from '../components/'

export const Landing = () => {
  const [isEnterClicked, setEnterClicked] = useState(false);
  return (
    <div className="landing-page">
      <div className="site-title landing-title">jozujanai</div>
      { (() => isEnterClicked ?
           null : <EnterButton update={setEnterClicked}/> )()}
    </div>
  )
}

Landing.propTypes = {
}

export default Landing