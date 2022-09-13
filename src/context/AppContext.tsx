import React, { useState, createContext, useContext, useReducer } from 'react';
import { AddToCartAction } from '../interfaces/AddToCartAction';
import { AppContextValue } from '../interfaces/AppContextValue';
import reducer from '../reducer';

interface Props {
	children: React.ReactNode
}

const defaultAppValue: AppContextValue = {
	cart: {
		items: []
	}
};

export const AppContext = createContext(defaultAppValue);

export const AppDispatchContext = createContext<React.Dispatch<AddToCartAction> | null>(null);

export const useStateDispatch = () => {
	const dispatch = useContext(AppDispatchContext);
	if (!dispatch) {
		throw new Error('dispatch error');
	}
	return dispatch;
}

const AppProvider: React.FC<Props> = ({ children }: Props) => {
	const [state, dispatch] = useReducer(reducer, defaultAppValue);
	return <AppContext.Provider value={state}>
		<AppDispatchContext.Provider value={dispatch}>
			{children}
		</AppDispatchContext.Provider>
	</AppContext.Provider>
}

export default AppProvider;
