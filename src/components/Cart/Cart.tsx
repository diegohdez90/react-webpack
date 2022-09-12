import React from "react";
import { Cart as CartIcon } from 'react-bootstrap-icons';

interface Props {}

interface State {
	isOpen: boolean
}

class Cart extends React.Component<Props, State> {
	state = {
		isOpen: false
	}

	render() {
		return (<button type="button" className="btn btn-link text-decoration-none" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
			<CartIcon />Cart
		</button>);
	}
}

export default Cart;
