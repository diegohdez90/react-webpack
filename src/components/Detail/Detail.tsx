import React from 'react';
import { Pizza } from "../../interfaces/Pizza";

interface Props {
	pizza: Pizza
}

const Detail: React.FC<Props> = ({
	pizza
}: Props) => <div>{pizza.name}</div>;

export default Detail;
