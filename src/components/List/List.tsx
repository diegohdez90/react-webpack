import React from 'react';
import { Pizza } from '../../interfaces/Pizza'; '../../interfaces/Pizza';
import pizzas from '../../data/pizzas.json';
import Detail from '../Detail';

const List: React.FC = () => (
	<div className='row'>
		<div className="col">
			<ul>
				{pizzas.map<JSX.Element>((item) => (<Detail key={item.id} pizza={item} />))}
			</ul>
		</div>
	</div>
);

export default List;