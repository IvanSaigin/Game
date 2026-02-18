import WinnerLayout from "./WinnerLayout"
import PropTypes from 'prop-types';

const WinnerContainer = ({ win }) => {
    return <WinnerLayout win={win} />
}

WinnerContainer.propTypes = {
    win: PropTypes.shape({
        X: PropTypes.number.isRequired,
        O: PropTypes.number.isRequired
    }).isRequired,
}

export default WinnerContainer
