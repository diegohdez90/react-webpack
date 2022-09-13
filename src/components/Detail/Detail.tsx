import React, { SetStateAction, useContext } from 'react';
import { Pizza } from "../../interfaces/Pizza";
import { AppSetContext, useSetState } from '../../context/AppContext';
import { AppContextValue } from '../../interfaces/AppContextValue';

interface Props {
	pizza: Pizza
}

const Detail: React.FC<Props> = ({
	pizza
}: Props) => {


	const setState = useSetState()
	const addToCart = () => {
		setState(state => {
			const index = state.cart.items.findIndex(item => item.pizzaId === pizza.id);
			return {
				...state,
				cart: {
					...state.cart,
					items: index > -1 ? state.cart.items.map(item => {
						if (item.pizzaId === pizza.id) {
							return {
								...item,
								quantity: item.quantity + 1
							}
						}
						return item;
					}) : [
						...state.cart.items, {
						pizzaId: pizza.id,
						name: pizza.name,
						price: +pizza.price,
						quantity: 1
					}]
				}
			};
		});
	}

	return (<div className='card py-3 p-4'>
		<img src={pizza.assets.menu[0].url} alt="pizza-image" />
		<div className="card-body">
			<h5 className="card-title h3">{pizza.name}</h5>
			<p className="card-text">{pizza.menu_description}</p>
			<h6 className="card-title pricing-card-title h4 text-center">${pizza.price}</h6>
			<button
				onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
					addToCart();
				}}
				className='btn btn-primary'
			>Add to cart</button>
		</div>
	</div>)
};

export default Detail;
