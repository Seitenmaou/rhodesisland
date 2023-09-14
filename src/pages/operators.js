import React from 'react';
import './operators.css';

import operatorData from '../data/operators.json'



const Operators = () => {
	return (
		<body>
			<h1>OPERATORS</h1>
			<container className='mainContainer'>
				
				<container className='operatorList'>

					{operatorData.map((data) => {
						return (
							<a href ={(data.operatorName)+'/'}  className='operatorCard'>
								<h1>{data.operatorName}</h1>
							</a>
						)
					})}

					
				</container>
			</container>
		</body>
	);
};

export default Operators;
