import { CartItem } from "./CartItem"

export interface AppContextValue {
	cart: {
		items: Array<CartItem>
	}
}
