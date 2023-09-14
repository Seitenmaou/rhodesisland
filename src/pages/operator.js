import React from 'react';
import './operators.css';

import operatorData from '../data/operators.json'

const Operators = () => {
	return (
		<body>
			<h1>{operatorData[0].operatorName}</h1>
		</body>
	);
};

export default Operators;
