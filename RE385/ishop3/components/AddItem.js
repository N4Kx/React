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
	}

	state = {

	}



	render() {
		return (
			<div className='AddItem'>
				<h3>Add new product</h3>
				<span className='editLabel'>ID:</span> <span>{this.props.addedItemId}</span><br />
				<span className='editLabel'>Name:</span>  <input type='text' value={this.state.editedItemName} onChange={this.editField} data-n={fieldName}></input>{(!this.state.isValidatedName) && <span className='validateError'>Please, fill the field. The value must be a string of Latin letters and numbers</span>}
				<br />
				<span className='editLabel'>Price:</span> <input type='text' value={this.state.editedItemPrice} onChange={this.editField} data-n={price}></input>{(!this.state.isValidatedPrice) && <span className='validateError'>Please, fill the field. The value must be a number greater than 0</span>}
				<br />
				<span className='editLabel'>Rest:</span> <input type='text' value={this.state.editedItemRest} onChange={this.editField} data-n={rest}></input>{(!this.state.isValidatedRest) && <span className='validateError'>Please, fill the field. The value must be a number greater than or equal to 0</span>}
				<br />
				<span className='editLabel'>Photo URL:</span> <input type='text' value={this.state.editedItemPhotoUrl} onChange={this.editField} data-n={photoUrl}></input>{(!this.state.isValidatedPhotoUrl) && <span className='validateError'>Please, fill the field. The value must be a string of Latin letters, numbers and symbols ".", "-", "\".</span>}
				<br />
				<input className='btn saveBtn' type='button' value='Save' onClick={this.save}
					disabled={(this.state.isValidatedName && this.state.isValidatedPrice && this.state.isValidatedRest) ? false : true}
				></input>
				<input className='btn cancelBtn' type='button' value='Cancel' onClick={this.cancel}></input>
			</div>
		)
	}
};


export default AddItem;