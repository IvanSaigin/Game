import { useSelector } from 'react-redux'
import WinnerLayout from "./WinnerLayout"
import { selectWin } from '../../selectors'

const WinnerContainer = () => {

    const win = useSelector(selectWin)

    return <WinnerLayout win={win} />
}

export default WinnerContainer
