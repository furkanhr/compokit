import { createContext, FC, PropsWithChildren, useContext } from 'react'

import { PatchState, usePatchState } from './usePatchState'

export type StoreBuilder<Store> = {
	Provider: FC<PropsWithChildren>
	useStore: () => ReturnType<typeof useContext<Store>>
}

export type CreateStoreTemplateFunction<State extends object, Actions> = (
	stateAccessorParams: PatchState<State>
) => State & Actions

export const createStore = <State extends object, Actions extends object>(
	createStoreTemplate: CreateStoreTemplateFunction<State, Actions>
): StoreBuilder<State & Actions> => {
	const Context = createContext<State & Actions>({} as State & Actions)

	const useStore = () => useContext(Context)

	const Provider: FC<PropsWithChildren> = ({ children }) => {
		const mockState = usePatchState({} as State)

		const template = createStoreTemplate(mockState)

		const fieldEntries = Object.entries(template).filter(
			([_, value]) => typeof value !== 'function'
		)

		const fields = Object.fromEntries(fieldEntries)

		const realState = usePatchState(fields as State)

		const boundTemplate: object = createStoreTemplate(realState)

		const methodEntries = Object.entries(boundTemplate).filter(
			([_, value]) => typeof value === 'function'
		)

		const methods = Object.fromEntries(methodEntries) as Actions

		// ? We don't pass the state updater functions like `setState` or `patchState`
		// ? because we want our actions to be defined and present only in the store not in the view
		const contextValue: State & Actions = {
			...realState.state,
			...methods,
		}

		return <Context.Provider value={contextValue}>{children}</Context.Provider>
	}

	return {
		Provider,
		useStore,
	}
}
