import React from 'react'
import { useState } from 'react'
import './Light.css'

const Light = () => {
	const [switchLight, setSwitchLight] = useState(false)

	return (
		<button
			className={switchLight ? 'on' : 'of'}
			onClick={() => {
				setSwitchLight(!switchLight)
			}}
			style={{ width: '100px', height: '50px' }}>
			{switchLight ? 'On' : 'Off'}
		</button>
	)
}

export { Light }
