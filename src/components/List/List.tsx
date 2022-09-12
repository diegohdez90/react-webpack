import React from 'react';
import { Pizza } from '../../interfaces/Pizza'; '../../interfaces/Pizza';
import pizzas from '../../data/pizzas.json';
import Detail from '../Detail';

const List: React.FC = () => (
	<div className='row gy-3 g-4'>
		{pizzas.map<JSX.Element>((item) => (
			<div key={item.id} className='col-sm-6 col-md-4'>
				<Detail pizza={item} />
			</div>
		))}
	</div>
);

export default List;