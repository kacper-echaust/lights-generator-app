import './App.css'
import { useState } from 'react'
import { Counter } from './Components/Counter/Counter'
import { SingleLight } from './Components/SingleLight/SingleLight'
import { Text } from './Components/Text/Text'
import { Grid } from './Components/Grid/Grid'

function App() {
	const [rows, setRows] = useState(0)
	const [columns, setColumns] = useState(0)
	const handleAddRow = () => {
		setRows(prevRows => prevRows + 1)
	}
	const handleMinusRow = () => {
		if (rows === 0) return
		setRows(prevRows => prevRows - 1)
	}
	const handleAddColumn = () => {
		if (columns === 9) return
		setColumns(prevColumn => prevColumn + 1)
	}
	const handleMinusColumn = () => {
		if (columns === 0) return
		setColumns(prevColumn => prevColumn - 1)
	}
	const totalLights = rows * columns
	const lights = Array.from({ length: totalLights }, (_, i) => i)
	return (
		<div>
			<div className='buttons-container'>
				<Text>{totalLights} bulbs</Text>
				<Counter text='rows' count={rows} onAdd={handleAddRow} onMinus={handleMinusRow} />
				<Counter text='columns' count={columns} onAdd={handleAddColumn} onMinus={handleMinusColumn} />
			</div>
			<Grid columns={columns} rows={rows}>
				{lights.map((light, index) => {
					return <SingleLight key={index} />
				})}
			</Grid>
		</div>
	)
}

export default App
