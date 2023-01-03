import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';

class Product extends React.Component {

	static propTypes = {
		id: PropTypes.number,
		productName: PropTypes.string,
		price: PropTypes.number,
		rest: PropTypes.number,
		photoUrl: PropTypes.string,
		isSelected: PropTypes.bool,
		cbSelectedItem: PropTypes.func,
		cbDeleteItem: PropTypes.func,
	};

	select = (eo) => {
		this.props.cbSelectedItem(this.props.id);
	};

	delete = (eo) => {
		eo.stopPropagation();
		this.props.cbDeleteItem(this.props.id);
	};

	render() {
		return (
			<tr className={(this.props.isSelected) ? 'selected' : null} onClick={this.select} >
				<td className='productName'>{this.props.productName}</td>
				<td className='price'>{this.props.price}</td>
				<td className='stockBalance'>{this.props.rest}</td>
				<td className='photoCell'>
					<img className='img' src={this.props.photoUrl}></img>
				</td>
				<td>
					<input className='deleteBtn' type='button' value='Delete' onClick={this.delete}></input>
				</td>
			</tr>
		);
	}
};

export default Product;