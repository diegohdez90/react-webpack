export interface AppContextValue {
	cart: {
		items: {
			pizzaId: number,
			name: string;
			price: number,
			quantity: number,
		}[]
	}
}
