import { createStore } from '@compokit/chef'

import { State, Actions } from './types'

export const store = createStore<State, Actions>(({ state, patchState }) => ({
	counter: 0,
	amount: 10,

	setCounter(counter) {
		patchState({ counter })
	},

	setAmount(amount) {
		patchState({ amount })
	},

	increment() {
		patchState({ counter: state.counter + 1 })
	},

	decrement() {
		patchState({ counter: state.counter - 1 })
	},

	incrementBy(amount) {
		patchState({ counter: state.counter + amount })
	},
}))
