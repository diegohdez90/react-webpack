import { Action } from "../action";
import { AppContextValue } from "./AppContextValue";

export interface InitializeCartAction extends Action<'INITIALIZE_CART'> {
	payload: {
		cart: AppContextValue['cart']
	}
}
