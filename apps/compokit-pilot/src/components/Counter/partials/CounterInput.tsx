import { InputNumber } from 'antd'
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'

import { store } from '../store'

export const CounterInput = () => {
	const { counter, setCounter, decrement, increment } = store.useStore()

	return (
		<InputNumber
			value={counter}
			defaultValue={1}
			onChange={counter => setCounter(counter ?? 0)}
			addonBefore={<MinusCircleOutlined onClick={decrement} />}
			addonAfter={<PlusCircleOutlined onClick={increment} />}
		/>
	)
}
