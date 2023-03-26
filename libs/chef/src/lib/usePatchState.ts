import { useState } from 'react'

export type PatchState<S extends object> = ReturnType<typeof usePatchState<S>>

export const usePatchState = <S extends object>(initialState: S) => {
	const [state, setState] = useState<S>(initialState)

	const patchState = (patch: Partial<S>) =>
		setState(prev => ({
			...prev,
			...patch,
		}))

	return {
		state,
		setState,
		patchState,
	}
}
