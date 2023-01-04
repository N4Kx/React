import React from 'react';
import ReactDOM from 'react-dom';

import Ishop from './components/Ishop';

const storeName = 'iFruitStore';

import productsArr from './products.json';

ReactDOM.render(
	<Ishop
		product={productsArr}
		name={storeName}
	/>
	, document.querySelector('#container')
);