import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}


Header.defaultProps = {
    title: 'React'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in js

// const headingStyling = {
//     text-align: Center;
//     spacing: 1.3em;
// }
export default Header

