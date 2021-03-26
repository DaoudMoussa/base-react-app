import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAddClick, showAddTask}) => {
    let message = showAddTask ? 'Close' : 'Add';

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button onClick={onAddClick} message={message} backgroundColor="#9872ed" color="white"/>
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

