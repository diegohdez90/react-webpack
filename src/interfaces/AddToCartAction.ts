import { Action } from "../action";
import { Pizza } from "./Pizza";

export interface AddToCartAction extends Action<'ADD_TO_CART'> {
	payload: {
		item: Omit<Pizza, 'menu_description' | 'classifications' | 'assets' | 'toppings'>
	}
}
