import { useState } from 'react';
import AppLayout from './AppLayout'

const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
  [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
];

function App() {

  const [currentPlayer, setCurrentPlayer] = useState('O')
  const [isGameEnded, setIsGameEnded] = useState(false)
  const [isDraw, setIsDraw] = useState(false)
  const [win, setWin] = useState({ X: 0, O: 0 })

  const [field, setField] = useState([
    '', '', '',
    '', '', '',
    '', '', '',
  ])

  const checkWinner = (fieldToCheck) => {

    return WIN_PATTERNS.some((value) => {

      const [a, ...rest] = value
      if (!fieldToCheck[a]) return false

      return rest.every((value) =>
        fieldToCheck[value] === fieldToCheck[a]
      )

    })
  }

  const onMotion = (index) => {

    if (field[index] || isGameEnded) return

    const newField = [...field];
    newField[index] = currentPlayer;
    setField(newField);


    if (checkWinner(newField)) {
      setIsGameEnded(true)
      setWin(prev => ({
        ...prev,
        [currentPlayer]: prev[currentPlayer] + 1
      }));
      return
    }

    if (!newField.includes('')) {
      setIsGameEnded(true)
      setIsDraw(true)
      return
    }
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')



  }


  const Restart = () => {
    setIsDraw(false)
    setIsGameEnded(false)
    setField(Array(9).fill(''))

  }

  return (

    <div className='wrapper-app'>
      <AppLayout currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} field={field} onMotion={onMotion} restart={Restart} win={win} />
    </div>

  );
}

export default App;
