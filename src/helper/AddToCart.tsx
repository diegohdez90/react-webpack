import React from 'react';
import { useStateDispatch } from '../context/AppContext';
import { Pizza } from '../interfaces/Pizza';
import { ADD_TO_CART } from '../utils/constants';

export interface Props {
	addToCart: (pizza: Pizza) => void;
}

export function withAddToCart<OriginalProps extends Props>(ChildComponent: React.ComponentType<OriginalProps>) {
	const AddToCartHOC = (props: Omit<OriginalProps, keyof Props>) => {
		const dispatch = useStateDispatch();

		const addToCart: Props['addToCart'] = (pizza: Pizza) => {
			dispatch({
				type: ADD_TO_CART,
				payload: {
					item: {
						id: pizza.id,
						name: pizza.name,
						price: +pizza.price
					}
				}
			});
		}
		return <ChildComponent {...props as OriginalProps} addToCart={addToCart} />
	}

	return AddToCartHOC;
}

export interface WithAddToCartProps {
	children: (props: Props) => JSX.Element;
}

export const WithAddToCartProps: React.FC<WithAddToCartProps> = ({ children }) => {
	const dispatch = useStateDispatch();

	const addToCart: Props['addToCart'] = (pizza: Pizza) => {
		dispatch({
			type: ADD_TO_CART,
			payload: {
				item: {
					id: pizza.id,
					name: pizza.name,
					price: +pizza.price
				}
			}
		});
	}

	return children({ addToCart });
}
