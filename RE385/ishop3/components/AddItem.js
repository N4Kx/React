import React from 'react';
import PropTypes from 'prop-types';

import './AddItem.css';

const fieldName = 'Name';
const price = 'Price';
const rest = 'Rest';
const photoUrl = 'PhotoUrl';

class AddItem extends React.Component {

	static propTypes = {
		addedItemId: PropTypes.number,
		product: PropTypes.array,
		cbAddItem: PropTypes.func,
	}

	state = {

	}

	editField = (eo) => {
		let newStateName = 'addedItem' + eo.target.dataset.n;
		this.setState({ [newStateName]: eo.target.value }); // , this.props.cbCancel({ lockBtns: true, appState: 2 })
		this.validPass(eo.target.dataset.n, eo.target.value);
	}

	validPass = (name, value) => {
		let isValidated = 'isValidated' + name;

		if (name == fieldName) {
			let regExp = /[^a-z0-9]/i;
			if (!regExp.test(value)) {
				this.setState({ [isValidated]: true });
			} else {
				this.setState({ [isValidated]: false });
			}
		}
		else if (name == photoUrl) {
			let regExp = /[^a-z0-9.\-\/]/i;
			if (!regExp.test(value)) {
				this.setState({ [isValidated]: true });
			} else {
				this.setState({ [isValidated]: false });
			}
		}
		else if (name == price) {
			value = Number(value);
			if (!isNaN(value) && value > 0) {
				this.setState({ [isValidated]: true });
			} else {
				this.setState({ [isValidated]: false });
			}
		}
		else if (name == rest) {
			value = Number(value);
			if (!isNaN(value) && value >= 0) {
				this.setState({ [isValidated]: true });
			} else {
				this.setState({ [isValidated]: false });
			}
		}
	}

	add = () => {
		let newProductObj = { productName: this.state.addedItemName, price: Number(this.state.addedItemPrice), rest: Number(this.state.addedItemRest), photoUrl: this.state.addedItemPhotoUrl, id: this.props.addedItemId, };
		let newProduct = this.props.product;
		newProduct.push(newProductObj);
		this.props.cbAddItem({ newProduct: newProduct, appState: 1 });
	}

	render() {
		return (
			<div className='AddItem'>
				<h3>Add new product</h3>
				<span className='addLabel'>ID:</span> <span>{this.props.addedItemId}</span><br />
				<span className='addLabel'>Name:</span>  <input type='text' value={this.state.editedItemName} onChange={this.editField} data-n={fieldName}></input>{(!this.state.isValidatedName) && <span className='validateError'>Please, fill the field. The value must be a string of Latin letters and numbers</span>}
				<br />
				<span className='addLabel'>Price:</span> <input type='text' value={this.state.editedItemPrice} onChange={this.editField} data-n={price}></input>{(!this.state.isValidatedPrice) && <span className='validateError'>Please, fill the field. The value must be a number greater than 0</span>}
				<br />
				<span className='addLabel'>Rest:</span> <input type='text' value={this.state.editedItemRest} onChange={this.editField} data-n={rest}></input>{(!this.state.isValidatedRest) && <span className='validateError'>Please, fill the field. The value must be a number greater than or equal to 0</span>}
				<br />
				<span className='addLabel'>Photo URL:</span> <input type='text' value={this.state.editedItemPhotoUrl} onChange={this.editField} data-n={photoUrl}></input>{(!this.state.isValidatedPhotoUrl) && <span className='validateError'>Please, fill the field. The value must be a string of Latin letters, numbers and symbols ".", "-", "\".</span>}
				<br />
				<input className='btn addBtn' type='button' value='Add' onClick={this.add}
					disabled={(this.state.isValidatedName && this.state.isValidatedPrice && this.state.isValidatedRest) ? false : true}
				></input>
				<input className='btn cancelBtn' type='button' value='Cancel' onClick={this.cancel}></input>
			</div>
		)
	}
};


export default AddItem;