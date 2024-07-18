import React from 'react'
import { useState } from 'react'
const Counter = () => {
	const [counter, setCounter] = useState(0)
	const handleClick = operator => {
		if (counter <= 0 && operator === '-') return
		setCounter(prevCounter => (operator === '+' ? prevCounter + 1 : prevCounter - 1))
	}
	return (
		<div>
			<p>{counter}</p>
			<button
				onClick={() => {
					handleClick('-')
				}}>
				-
			</button>
			<button
				onClick={() => {
					handleClick('+')
				}}>
				+
			</button>
		</div>
	)
}

export { Counter }
