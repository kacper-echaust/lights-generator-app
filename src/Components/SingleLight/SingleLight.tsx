import React from 'react'
import { useState } from 'react'
import './SingleLight.css'
import LightTurnedOff from '/images/light-turned-off.svg'
import LightBlue from '/images/light-blue.svg'

const SingleLight = () => {
	const [switchLight, setSwitchLight] = useState(false)

	const imageUrl = switchLight ? LightBlue : LightTurnedOff

	const handleSwitchLight = () => {
		setSwitchLight(!switchLight)
	}

	return <img src={imageUrl} alt='light' onClick={handleSwitchLight} />
}

export { SingleLight }
