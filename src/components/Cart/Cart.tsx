import React, { createRef } from 'react';
import { Popover } from 'react-bootstrap';
import { Cart as CartIcon, Plus } from 'react-bootstrap-icons';
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger';
import { AppContext } from '../../context/AppContext';
import { AppContextValue } from '../../interfaces/AppContextValue';
import { ZERO } from '../../utils/constants';

interface Props {}

class Cart extends React.Component<Props> {

	#containerRef: React.RefObject<HTMLButtonElement> = createRef();;
	containerRef = createRef();
	render() {
		return (
			<AppContext.Consumer>{
				(state: AppContextValue) => {
					const total = state.cart.items.reduce((sum, item) => item.quantity + sum, ZERO)
					return (<OverlayTrigger
						placement='bottom'
						overlay={<Popover>
							<Popover.Body>
								<ul>
									{state.cart.items.map((pizza, index) => (<li key={`${index}-${pizza.id}`}>{pizza.name} {pizza.quantity > 1 ? (<React.Fragment><Plus /> {pizza.quantity}</React.Fragment>) : null}</li>))}
								</ul>
							</Popover.Body>
						</Popover>}
					>
						<button
							ref={this.#containerRef}
							className="btn btn-link text-decoration-none"><CartIcon />{
								total > 0 ? `${total} pizza${total > 1 ? 's': ''}` : 'No pizza selected'
							}</button>
					</OverlayTrigger>)
				}
			}</AppContext.Consumer>
		);
	}
}

export default Cart;
