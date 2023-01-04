import React from 'react';
import PropTypes from 'prop-types';

import './ProductCard.css';

class ProductCard extends React.Component {
	static propTypes = {
		selectedItemId: PropTypes.number,
		selectedItemName: PropTypes.string,
		selectedItemPrice: PropTypes.number,
	}

	render() {
		return (
			<div>
				<h3>{this.props.selectedItemName}</h3>
				<span>{this.props.selectedItemName}</span>
				<br />
				<span>Price: {this.props.selectedItemPrice}</span>
			</div>
		)
	}
};

export default ProductCard;