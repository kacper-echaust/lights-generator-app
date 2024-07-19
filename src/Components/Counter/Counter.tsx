import React from 'react'

import { AddIcon } from '../icons/AddIcon'
import { MinusIcon } from '../icons/MinusIcon'
import './Counter.css'

const Counter = ({ text, count, onAdd,onMinus }) => {
	return (
		<div className='counter-container'>
			<p>{`${count} ${text}`}</p>
			<MinusIcon
				onClick={onMinus}
			/>
			<AddIcon
				onClick={onAdd}
			/>
		</div>
	)
}

export { Counter }
