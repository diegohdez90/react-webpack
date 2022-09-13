import { AddToCartAction } from "./interfaces/AddToCartAction";
import { AppContextValue } from "./interfaces/AppContextValue";
import { ADD_TO_CART } from "./utils/constants";

const reducer = (state: AppContextValue, action: AddToCartAction) => {
	switch (action.type) {
		case ADD_TO_CART:
			const itemToAdd = action.payload.item;
			const index = state.cart.items.findIndex(item => item.pizzaId === itemToAdd.id);
			return {
				...state,
				cart: {
					...state.cart,
					items: index > -1 ? state.cart.items.map(item => {
						if (item.pizzaId === itemToAdd.id) {
							return {
								...item,
								quantity: item.quantity + 1
							}
						}
						return item;
					}) : [
						...state.cart.items, {
						pizzaId: itemToAdd.id,
						name: itemToAdd.name,
						price: +itemToAdd.price,
						quantity: 1
					}]
				}
			};
		default:
			return state;
	}
}

export default reducer;