import { useReduxState } from "../../ReduxMeneger";
import WinnerLayout from "./WinnerLayout"

const WinnerContainer = () => {

    const { win } = useReduxState()


    return <WinnerLayout win={win} />
}

export default WinnerContainer
