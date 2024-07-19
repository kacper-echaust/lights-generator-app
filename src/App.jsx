import './App.css'
import { Counter } from './Components/Counter/Counter'
import { Light } from './Components/SingleLight/SingleLight'
import { Text } from './Components/Text/Text'

function App() {
	return (
		<div>
			<div className='buttons-container'>
				<Text>0 bulbs</Text>
				<Counter text='rows' count={0} />
				<Counter text='columns' count={0} />
			</div>
			<Light />
		</div>
	)
}

export default App
