export type Props = {
	title: string
}

export type State = {
	counter: number
	amount: number
}

export type Actions = {
	setCounter: (counter: number) => void
	increment: () => void
	decrement: () => void
	incrementBy: (amount: number) => void
	setAmount: (amount: number) => void
}

export type Store = State & Actions
