import { CartItem } from "./CartItem"
import { Action } from "../action";
import { Pizza } from "./Pizza";

export interface AddToCartAction extends Action<'ADD_TO_CART'> {
	payload: {
		item: Omit<CartItem, 'quantity'>;
	}
}
