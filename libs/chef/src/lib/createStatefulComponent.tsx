import { FC } from 'react'

import { StoreBuilder } from './createStore'

export const createStatefulComponent = <Store, GivenProps extends {}>(
	Store: StoreBuilder<Store>,
	Component: FC<Store & GivenProps>
) => {
	const Slug: FC<GivenProps> = givenProps => {
		const localState = Store.useStore()

		const props = {
			...localState,
			...givenProps,
		}

		return <Component {...props} />
	}

	return (givenProps: GivenProps) => {
		return (
			<Store.Provider>
				<Slug {...givenProps} />
			</Store.Provider>
		)
	}
}
