import React from 'react'
import PropTypes from 'prop-types'
const EnterButton = ({update}) => (

    <div className="enter-button-wrapper">
        <div className="enter-button">
        <div className="enter-button-main enter-button-ripple"/>
        <div
            className="enter-button-main" 
            onClick={()=> update(true)}
            />
        </div>
        <div className="enter-button-text">vvv</div>
    </div>
);

EnterButton.propTypes = {
  update: PropTypes.func.isRequired,
}

export default EnterButton