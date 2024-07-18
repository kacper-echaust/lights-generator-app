import React from 'react'
import { useState } from 'react'
import { AddIcon } from '../icons/AddIcon'
import { MinusIcon } from '../icons/MinusIcon'
import './Counter.css'

const Counter = ({ text }) => {
	const [counter, setCounter] = useState(0)

	const handleClick = operator => {
		if (counter <= 0 && operator === '-') return
		setCounter(prevCounter => (operator === '+' ? prevCounter + 1 : prevCounter - 1))
	}

	return (
		<div className='counter-container'>
			<p>{`${counter} ${text}`}</p>
			<MinusIcon
				onClick={() => {
					handleClick('-')
				}}
			/>
			<AddIcon
				onClick={() => {
					handleClick('+')
				}}
			/>
		</div>
	)
}

export { Counter }
