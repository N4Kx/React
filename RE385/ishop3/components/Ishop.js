import React from 'react';
import PropTypes from 'prop-types';

import './Ishop.css';

import Product from './Product';
import ProductCard from './ProductCard';
import EditItem from './EditItem';
import AddItem from './AddItem';

class Ishop extends React.Component {

	static propTypes = {
		product: PropTypes.array,
		name: PropTypes.string,
	};

	state = {
		product: this.props.product,
		selectedItemId: '',
		disableBtns: false,
		appState: 1,		// 1 - по умолчанию, 2 - редактирование продукта, 3 - добавление продукта

	};

	selectedItem = (code) => {
		this.setState({ selectedItemId: code.selectedId, selectedItemName: code.selectedName, selectedItemPrice: code.selectedPrice, appState: code.appState });
	};


	deleteItem = (code) => {
		if (confirm('Are you sure that you wan\'t to delete this product ?')) {
			const newProduct = this.state.product.filter(value => value.id != code);
			this.setState({ product: newProduct });
		}
	};

	editItem = (code) => {
		this.setState({ editedItemId: code.editedId, editedItemName: code.editedName, editedItemPrice: code.editedPrice, editedItemRest: code.editedRest, editedItemPhotoUrl: code.editedPhotoUrl, isEdited: code.isEdited, appState: code.appState });
	}

	initAddItem = (code) => {
		this.setState({ appState: 3 })
	}

	saveItem = (code) => {
		let newProduct = [];
		for (let value of this.state.product) {
			if (value.id == code.editedId) {
				newProduct.push({ productName: code.editedName, price: Number(code.editedPrice), photoUrl: code.editedPhotoUrl, rest: Number(code.editedRest), id: Number(code.editedId), });
			} else {
				newProduct.push(value);
			}
		}
		this.setState({ product: newProduct });
	}

	cancel = (code) => {
		this.setState({ disableBtns: code.lockBtns, appState: code.appState, });
	}

	render() {
		let products = this.state.product.map(value =>
			<Product
				key={value.id}
				id={value.id}
				productName={value.productName}
				price={value.price}
				rest={value.rest}
				isSelected={value.id == this.state.selectedItemId}
				isEdited={value.id == this.state.editedItemId && this.state.appState == 2}
				isDisabledBtns={this.state.disableBtns}
				appState={this.state.appState}
				photoUrl={value.photoUrl}
				cbSelectedItem={this.selectedItem} cbDeleteItem={this.deleteItem}
				cbEditItem={this.editItem}
			/>
		);

		return (
			<div className='Ishop'>
				<table>
					<thead>
						<tr>
							<th className='storeTable' colSpan={5}>{this.props.name}</th>
						</tr>
					</thead>
					<thead>
						<tr>
							<th className='tableHeader'>Product name</th>
							<th className='tableHeader'>Price</th>
							<th className='tableHeader'>Stock balance</th>
							<th className='tableHeader'>Photo</th>
							<th className='tableHeader'>Control</th>
						</tr>
					</thead>
					<tbody>
						{products}
					</tbody>
				</table>
				{
					(this.state.appState == 1 || !this.state.isEdited) &&
					<input className='newBtn btn' type='button' value='New product' onClick={this.initAddItem}></input>
				}
				{
					(this.state.appState != 3)
						?
						(this.state.editedItemId == this.state.selectedItemId && this.state.appState == 2) ?
							(this.state.appState == 2) && <EditItem
								key={this.state.editedItemId}
								editedItemId={this.state.editedItemId}
								editedItemName={this.state.editedItemName}
								editedItemPrice={this.state.editedItemPrice}
								editedItemRest={this.state.editedItemRest}
								editedItemPhotoUrl={this.state.editedItemPhotoUrl}
								isEditedItem={this.state.selectedItemId == this.state.editedItemId}
								cbCancel={this.cancel}
								cbSaveItem={this.saveItem}
							/>
							:
							(this.state.selectedItemId) && <ProductCard
								selectedItemId={this.state.selectedItemId}
								selectedItemName={this.state.selectedItemName}
								selectedItemPrice={this.state.selectedItemPrice}
							/>

						:
						<AddItem
							addedItemId={this.state.product.length}
						/>
				}
			</div>
		);
	}
};

export default Ishop;



/*
	{
					(this.state.appState == 1 || this.state.appState != 3) &&
					<input className='newBtn btn' type='button' value='New product' onClick={this.addItem}></input>
				}



{(this.state.editedItemId == this.state.selectedItemId) ?
					<EditItem
						key={this.state.editedItemId}
						editedItemId={this.state.editedItemId}
						editedItemName={this.state.editedItemName}
						editedItemPrice={this.state.editedItemPrice}
						editedItemRest={this.state.editedItemRest}
						editedItemPhotoUrl={this.state.editedItemPhotoUrl}
						isEditedItem={this.state.selectedItemId == this.state.editedItemId}
						cbCancel={this.cancel}
						cbSaveItem={this.saveItem}
					/>
					:
					(this.state.selectedItemId) && <ProductCard
						selectedItemId={this.state.selectedItemId}
						selectedItemName={this.state.selectedItemName}
						selectedItemPrice={this.state.selectedItemPrice}
					/>
				}
*/