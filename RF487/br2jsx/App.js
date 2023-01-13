import React from 'react';
import ReactDOM from 'react-dom';

import BR2JSX from './components/BR2JSX';

let text = "нулевой второй тридцатьпервый 31 _двадвацть первый<br>второй<br/>третий<br />последний";

ReactDOM.render(
	<BR2JSX text={text} />
	, document.querySelector('#container')
);