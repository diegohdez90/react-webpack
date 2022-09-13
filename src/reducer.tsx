import { AddToCartAction } from "./interfaces/AddToCartAction";
import { AppContextValue } from "./interfaces/AppContextValue";
import { InitializeCartAction } from "./interfaces/InitializeCartAction";
import { ADD_TO_CART, INITIALIZE_CART } from "./utils/constants";

const reducer = (state: AppContextValue, action: AddToCartAction | InitializeCartAction) => {
	switch (action.type) {
		case ADD_TO_CART:
			const itemToAdd = action.payload.item;
			const index = state.cart.items.findIndex(item => item.id === itemToAdd.id);
			return {
				...state,
				cart: {
					...state.cart,
					items: index > -1 ? state.cart.items.map(item => {
						if (item.id === itemToAdd.id) {
							return {
								...item,
								quantity: item.quantity + 1
							}
						}
						return item;
					}) : [
						...state.cart.items, {
						id: itemToAdd.id,
						name: itemToAdd.name,
						price: +itemToAdd.price,
						quantity: 1
					}]
				}
			};
		case INITIALIZE_CART:
			return {
				...state,
				cart: action.payload
			}
		default:
			return state;
	}
}

export default reducer;