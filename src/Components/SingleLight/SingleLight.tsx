import React from 'react'
import { useState } from 'react'
import './SingleLight.css'
import LightTurnedOff from '/images/light-turned-off.svg'
import LightBlue from '/images/light-blue.svg'
import LightGreen from '/images/light-green.svg'
import LightOrange from '/images/light-orange.svg'
import LightPink from '/images/light-pink.svg'
import LightRed from '/images/light-red.svg'
import LightYellow from '/images/light-yellow.svg'

const lights = [LightBlue, LightGreen, LightPink, LightOrange, LightRed, LightYellow]
const SingleLight = () => {
	const [switchLight, setSwitchLight] = useState(false)
	const randomColor = Math.round(Math.random() * lights.length)
	const imageUrl = switchLight ? LightTurnedOff : lights[randomColor]

	const handleSwitchLight = () => {
		setSwitchLight(!switchLight)
	}

	return <img src={imageUrl} alt='light' onClick={handleSwitchLight} />
}

export { SingleLight }
