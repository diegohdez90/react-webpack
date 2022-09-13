import React from 'react';
import { Pizza } from '../../interfaces/Pizza';
import Detail from '../Detail';

interface Props {
	pizzas: Array<Pizza>
}

const List: React.FC<Props> = ({ pizzas }: Props) => (
	<div className='row gy-3 g-4'>
		{pizzas.map<JSX.Element>((item) => (
			<div key={item.id} className='col-sm-6 col-md-4'>
				<Detail pizza={item} />
			</div>
		))}
	</div>
);

export default List;