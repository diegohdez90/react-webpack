import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { AddToCartAction } from '../interfaces/AddToCartAction';
import { AppContextValue } from '../interfaces/AppContextValue';
import reducer from '../reducer';
import { INITIALIZE_CART } from '../utils/constants';

interface Props {
	children: React.ReactNode
}

const defaultAppValue: AppContextValue = {
	cart: {
		items: []
	}
};

export const AppContext = createContext(defaultAppValue);

export const AppDispatchContext = createContext<React.Dispatch<AddToCartAction> | undefined>(undefined);

export const useStateDispatch = () => {
	const dispatch = useContext(AppDispatchContext);
	if (!dispatch) {
		throw new Error('dispatch error');
	}
	return dispatch;
}

const AppProvider: React.FC<Props> = ({ children }: Props) => {
	const [state, dispatch] = useReducer(reducer, defaultAppValue);

	useEffect(() => {
		const cart = window.localStorage.getItem('cart');
		if (cart) {
			const data = JSON.parse(cart);
			dispatch({
				type: INITIALIZE_CART,
				payload: data
			});
		}
	}, []);

	useEffect(() => {
		window.localStorage.setItem('cart', JSON.stringify(state.cart))
	}, [state.cart]);
	
	return <AppContext.Provider value={state}>
		<AppDispatchContext.Provider value={dispatch}>
			{children}
		</AppDispatchContext.Provider>
	</AppContext.Provider>
}

export default AppProvider;
