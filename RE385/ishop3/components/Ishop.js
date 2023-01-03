import React from 'react';

import './Ishop.css';

import Product from './Product';

class Ishop extends React.Component {

	static propTypes = {
		product: PropTypes.array,
		name: PropTypes.string,
	};

	state = {
		product: this.props.product,
		selectedItemId: '',
	};

	selectedItem = (code) => {
		this.setState({ selectedItemId: code });
	};


	deleteItem = (code) => {
		if (confirm('Are you sure that you wan\'t to delete this product ?')) {
			const newProduct = this.state.product.filter(value => value.id != code);
			this.setState({ product: newProduct });
		}
	};

	render() {
		let products = this.state.product.map(value =>
			<Product key={value.id} id={value.id} productName={value.productName} price={value.price}
				rest={value.rest} isSelected={value.id == this.state.selectedItemId}
				photoUrl={value.photoUrl}
				cbSelectedItem={this.selectedItem} cbDeleteItem={this.deleteItem} />
		);

		return (
			<table className='Ishop'>
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
		);
	}
};

export default Ishop;