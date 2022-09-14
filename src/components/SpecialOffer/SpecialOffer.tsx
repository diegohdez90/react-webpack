import React from 'react';
import { withAddToCart } from '../../helper/AddToCart';
import { Pizza } from '../../interfaces/Pizza';
import { Props as AddToCartProps} from '../../helper/AddToCart';

interface Props extends AddToCartProps {
	pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({pizza, addToCart} : Props) => {

	return (
		<div className="row gy-3 g-4 my-4">
			<div className="col">
				<div className='card py-3 p-4'>
					<img src={pizza.assets.menu[0].url} alt="pizza-image" />
					<div className="card-body">
						<h5 className="card-title h3">{pizza.name}</h5>
						<p className="card-text">{pizza.menu_description}</p>
						<h6 className="card-title pricing-card-title h4 text-center">${pizza.price}</h6>
						<button
							onClick={(_: React.MouseEvent<HTMLButtonElement>) => {
								addToCart(pizza);
							}}
							className='btn btn-primary'
						>Add to cart</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default withAddToCart(SpecialOffer);
