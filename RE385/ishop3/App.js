"use strict";

import React from "react";
import ReactDOM from "react-dom";

import Ishop from './components/Ishop';

const container = document.querySelector('#container');
const storeName = 'iFruitStore';

// import productsArr from './products.json';
const productsArr = [
	{ productName: 'Carrot', price: 10, photoUrl: 'img/carrot.jpg', rest: 5, id: 1, },
	{ productName: 'Apple', price: 1, photoUrl: 'img/apple.jpg', rest: 99, id: 2, },
	{ productName: 'Pear', price: 3, photoUrl: 'img/pear.jpg', rest: 22, id: 3, },
	{ productName: 'Orange', price: 5, photoUrl: 'img/orange.jpg', rest: 15, id: 4, },
	{ productName: 'Grape', price: 79, photoUrl: 'img/grape.jpg', rest: 52, id: 5, },
];

const reactElem = React.createElement(Ishop, { product: productsArr, name: storeName });

ReactDOM.render(reactElem, container);