import { Space, InputNumber, Button, Typography } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'

import { store } from '../store'

const { Text } = Typography

export const CounterInputAdjustable = () => {
	const { amount, setAmount, incrementBy } = store.useStore()

	return (
		<Space>
			<InputNumber
				min={1}
				value={amount}
				defaultValue={10}
				onChange={amount => setAmount(amount ?? 0)}
				addonBefore={<Text className='no-pointer-events'>Increment by</Text>}
			/>

			<Button onClick={() => incrementBy(amount)}>
				<PlusCircleOutlined />
			</Button>
		</Space>
	)
}
