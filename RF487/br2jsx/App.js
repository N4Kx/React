import React from 'react';
import ReactDOM from 'react-dom';

import BR2JSX from './components/BR2JSX';

let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];

ReactDOM.render(
	<RainbowFrame colors={colors}>
		Hello!
	</RainbowFrame>
	, document.querySelector('#container')
);