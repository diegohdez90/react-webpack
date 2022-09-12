export interface Pizza {
	id: number;
	name: string;
	price: string;
	menu_description: string;
	classifications: {[key: string]: boolean};
	assets: {
		menu: {
			[key: string]: string
		}[],
		product_details_page: {
			[key: string]: string
		}[]
	},
	toppings: {
		id: number,
		name: string,
		description: null | string,
		asset: {
			[key: string]: string
		}
	}[]
}