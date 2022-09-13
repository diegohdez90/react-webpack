import React from 'react';
import { Popover } from 'react-bootstrap';
import { Cart as CartIcon } from 'react-bootstrap-icons';
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger';
import Tooltip from 'react-bootstrap/esm/Tooltip';

interface Props {}

class Cart extends React.Component<Props> {

	render() {
		return (
			<OverlayTrigger
				placement='bottom'
				overlay={<Popover>
					<Popover.Body>
						2 pizzas
					</Popover.Body>
				</Popover>}
			>
				<button className="btn btn-link text-decoration-none"><CartIcon />Cart</button>
			</OverlayTrigger>
		);
	}
}

export default Cart;
