import React from 'react';
import { Popover } from 'react-bootstrap';
import { Cart as CartIcon, Plus } from 'react-bootstrap-icons';
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger';
import { AppContext } from '../../context/AppContext';
import { AppContextValue } from '../../interfaces/AppContextValue';

interface Props {}

class Cart extends React.Component<Props> {

	render() {
		return (
			<AppContext.Consumer>{(state: AppContextValue) =>
				<OverlayTrigger
					placement='bottom'
					overlay={<Popover>
						<Popover.Body>{
							state.cart.items.length > 0 ? `${state.cart.items.length} pizza${state.cart.items.length > 1 ? 's': ''}` : 'No pizza selected'
						}
							<ul>
								{state.cart.items.map((pizza, index) => (<li key={`${index}-${pizza.pizzaId}`}>${pizza.name} {pizza.quantity > 1 ? (<React.Fragment><Plus /> {pizza.quantity}</React.Fragment>) : null}</li>))}
							</ul>
						</Popover.Body>
					</Popover>}
				>
					<button className="btn btn-link text-decoration-none"><CartIcon /> {state.cart.items.length} added</button>
				</OverlayTrigger>
			}</AppContext.Consumer>
		);
	}
}

export default Cart;
