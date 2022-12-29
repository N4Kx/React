"use strict";

import React from "react";
import ReactDOM from "react-dom";

import Ishop from './components/Ishop';

const container = document.querySelector('#container');
const storeName = 'iFruitStore';

import productsArr from './products.json';

const reactElem = React.createElement(Ishop, { product: productsArr, name: storeName });

ReactDOM.render(reactElem, container);