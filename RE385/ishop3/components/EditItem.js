import React from 'react';
import PropTypes from 'prop-types';

import './EditItem.css';

const fieldName = 'Name';
const price = 'Price';
const rest = 'Rest';
const photoUrl = 'PhotoUrl';

class EditItem extends React.Component {

	static propTypes = {
		editedItemId: PropTypes.number,
		editedItemName: PropTypes.string,
		editedItemPrice: PropTypes.number,
		editedItemRest: PropTypes.number,
		editedItemPhotoUrl: PropTypes.string,
		isEditedItem: PropTypes.bool,
		cbCancel: PropTypes.func,
		cbSaveItem: PropTypes.func,
	}

	state = {
		editedItemId: this.props.editedItemId,
		editedItemName: this.props.editedItemName,
		editedItemPrice: this.props.editedItemPrice,
		editedItemRest: this.props.editedItemRest,
		editedItemPhotoUrl: this.props.editedItemPhotoUrl,
		isValidatedName: true,
		isValidatedPrice: true,
		isValidatedRest: true,
		isValidatedPhotoUrl: true,
	}

	editField = (eo) => {
		let newStateName = 'editedItem' + eo.target.dataset.n;
		this.setState({ [newStateName]: eo.target.value }, this.props.cbCancel({ lockBtns: true, appState: 2 }));
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
			if (!regExp.test(value) && value.length > 0) {
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

	save = (eo) => {
		this.props.cbSaveItem({
			editedId: this.state.editedItemId,
			editedName: this.state.editedItemName,
			editedPrice: this.state.editedItemPrice,
			editedRest: this.state.editedItemRest,
			editedPhotoUrl: this.state.editedItemPhotoUrl
		},
			this.props.cbCancel({ lockBtns: false, appState: 1 }));

	}

	cancel = (eo) => {
		this.setState({
			editedItemId: this.props.editedItemId,
			editedItemName: this.props.editedItemName,
			editedItemPrice: this.props.editedItemPrice,
			editedItemRest: this.props.editedItemRest,
			editedItemPhotoUrl: this.props.editedItemPhotoUrl,
		},
			this.props.cbCancel({ lockBtns: false, appState: 1 }));
	}

	render() {
		return (
			<div className='EditIem'>
				<h3>Edit existing product</h3>
				<span className='editLabel'>ID:</span> <span>{this.state.editedItemId}</span><br />
				<span className='editLabel'>Name:</span>  <input type='text' value={this.state.editedItemName} onChange={this.editField} data-n={fieldName}></input>{(!this.state.isValidatedName) && <span className='validateError'>Please, fill the field. The value must be a string of Latin letters and numbers</span>}
				<br />
				<span className='editLabel'>Price:</span> <input type='text' value={this.state.editedItemPrice} onChange={this.editField} data-n={price}></input>{(!this.state.isValidatedPrice) && <span className='validateError'>Please, fill the field. The value must be a number greater than 0</span>}
				<br />
				<span className='editLabel'>Rest:</span> <input type='text' value={this.state.editedItemRest} onChange={this.editField} data-n={rest}></input>{(!this.state.isValidatedRest) && <span className='validateError'>Please, fill the field. The value must be a number greater than or equal to 0</span>}
				<br />
				<span className='editLabel'>Photo URL:</span> <input type='text' value={this.state.editedItemPhotoUrl} onChange={this.editField} data-n={photoUrl}></input>{(!this.state.isValidatedPhotoUrl) && <span className='validateError'>Please, fill the field. The value must be a string of Latin letters, numbers and symbols ".", "-", "\".</span>}
				<br />
				<input className='btn saveBtn' type='button' value='Save' onClick={this.save}
					disabled={(this.state.isValidatedName && this.state.isValidatedPrice && this.state.isValidatedRest && this.state.isValidatedPhotoUrl) ? false : true}
				></input>
				<input className='btn cancelBtn' type='button' value='Cancel' onClick={this.cancel}></input>
			</div>
		)
	}
};

export default EditItem;