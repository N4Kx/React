import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';
import { TSThisType } from 'babel-types';

class Product extends React.Component {

	static propTypes = {
		id: PropTypes.number,
		productName: PropTypes.string,
		price: PropTypes.number,
		rest: PropTypes.number,
		photoUrl: PropTypes.string,
		isSelected: PropTypes.bool,
		isEdited: PropTypes.bool,
		isDisabledBtns: PropTypes.bool,
		cbSelectedItem: PropTypes.func,
		cbDeleteItem: PropTypes.func,
		cbEditItem: PropTypes.func,
	};

	select = (eo) => {
		// this.props.cbSelectedItem(this.props.id);
		(!this.props.isDisabledBtns) && (
			this.props.cbSelectedItem({ selectedId: this.props.id, selectedName: this.props.productName, selectedPrice: this.props.price, selectedRest: this.props.rest, selectedUrl: this.props.photoUrl }))
	};

	delete = (eo) => {
		eo.stopPropagation();
		this.props.cbDeleteItem(this.props.id);
	};

	edit = (eo) => {
		// console.log(`Edit pushed ${this.props.id}`);
		// this.props.cbEditItem(this.props.id);
		this.props.cbEditItem({ editedId: this.props.id, editedName: this.props.productName, editedPrice: this.props.price, editedRest: this.props.rest, editedPhotoUrl: this.props.photoUrl });
	}

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
					<input className={(this.props.isEdited) ? 'editBtn btn selectedEditBtn' : 'editBtn btn'} type='button' value='Edit' onClick={this.edit} disabled={this.props.isDisabledBtns}></input>
					<input className='deleteBtn btn' type='button' value='Delete' onClick={this.delete} disabled={this.props.isDisabledBtns}></input>
				</td>
			</tr>
		);
	}
};

export default Product;