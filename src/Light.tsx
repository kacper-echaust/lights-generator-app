import React from 'react'
import { useState } from 'react'

const Light = () => {
	const [switchLight, setSwitchLight] = useState(false)

	return (
		<button
			onClick={() => {
				setSwitchLight(!switchLight)
			}}></button>
	)
}

export { Light }
