import React from 'react';
import PropTypes from 'prop-types';

import './EditItem.css';

class EditItem extends React.Component {

	static propTypes = {
		editedItemId: PropTypes.number,
		editedItemName: PropTypes.string,
		editedItemPrice: PropTypes.number,
		editedItemRest: PropTypes.number,
		editedItemPhotoUrl: PropTypes.string,
		cbDisableBtns: PropTypes.func,
		cbSaveItem: PropTypes.func,
	}

	state = {
		editedItemId: this.props.editedItemId,
		editedItemName: this.props.editedItemName,
		editedItemPrice: this.props.editedItemPrice,
		editedItemRest: this.props.editedItemRest,
		editedItemPhotoUrl: this.props.editedItemPhotoUrl,
	}

	editField = (eo) => {
		let newStateName = 'editedItem' + eo.target.dataset.n;
		this.setState({ [newStateName]: eo.target.value }, this.props.cbDisableBtns(true))
	}

	// editNameField = (eo) => {
	// 	this.setState({ editedItemName: eo.target.value }, this.props.cbDisableBtns(true))
	// }

	// editPriceField = (eo) => {
	// 	this.setState({ editedItemPrice: eo.target.value }, this.props.cbDisableBtns(true))
	// }

	// editRestField = (eo) => {
	// 	this.setState({ editedItemRest: eo.target.value }, this.props.cbDisableBtns(true))
	// }

	// editPhotoUrlField = (eo) => {
	// 	this.setState({ editedItemPhotoUrl: eo.target.value }, this.props.cbDisableBtns(true))
	// }

	save = (eo) => {
		this.props.cbSaveItem({ editedId: this.state.editedItemId, editedName: this.state.editedItemName, editedPrice: this.state.editedItemPrice, editedRest: this.state.editedItemRest, editedPhotoUrl: this.state.editedItemPhotoUrl })
		this.props.cbDisableBtns(false);
	}

	// могу ли я такой мелкой функцией заменить прямой вызов коллбэк функции из пропсов или это плохой стиль ? по идее
	// усложняет код и может вызвать дополнительные ошибки, но визуально выглядит красивее и читабельнее ?
	// disableBtns = (value) => {
	// 	this.props.cbDisableBtns(value);
	// }

	cancel = (eo) => {
		this.setState({
			editedItemId: this.props.editedItemId,
			editedItemName: this.props.editedItemName,
			editedItemPrice: this.props.editedItemPrice,
			editedItemRest: this.props.editedItemRest,
			editedItemPhotoUrl: this.props.editedItemPhotoUrl,
		},
			this.props.cbDisableBtns(false));
	}

	render() {
		return (
			<div className='EditIem'>
				<span className='editLabel'>ID:</span> <span>{this.state.editedItemId}</span><br />
				<span className='editLabel'>Name:</span>  <input type='text' value={this.state.editedItemName} onChange={this.editField} data-n='Name'></input><br />
				<span className='editLabel'>Price:</span> <input type='text' value={this.state.editedItemPrice} onChange={this.editField} data-n='Price'></input><br />
				<span className='editLabel'>Rest:</span> <input type='text' value={this.state.editedItemRest} onChange={this.editField} data-n='Rest'></input><br />
				<span className='editLabel'>Photo URL:</span> <input type='text' value={this.state.editedItemPhotoUrl} onChange={this.editField} data-n='PhotoUrl'></input><br />
				<input className='btn saveBtn' type='button' value='Save' onClick={this.save}></input>
				<input className='btn cancelBtn' type='button' value='Cancel' onClick={this.cancel}></input>
			</div>
		)
	}
};

export default EditItem;