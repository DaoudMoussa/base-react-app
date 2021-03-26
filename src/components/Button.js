import React from 'react'
import PropTypes from 'prop-types'

const Button = ({message, color, backgroundColor, onClick}) => {
    const buttonStyle = {
        color: color, 
        backgroundColor: backgroundColor
    };

    
    return (
        <button onClick={onClick} className="btn" style={buttonStyle}>
            {message}
        </button>
    )
}

Button.defaultProps = {
    message: 'click',
};

Button.propTypes = {
    message: PropTypes.string.isRequired,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
