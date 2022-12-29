let Ishop = React.createClass({

	displayName: 'Ishop',

	propTypes: {
		product: React.PropTypes.array,
		name: React.PropTypes.string,
	},

	getInitialState: function () {
		return {
			product: this.props.product,
			selectedItemId: '',
		}
	},
	selectedItem: function (code) {
		this.setState({ selectedItemId: code });
	}
	,

	deleteItem: function (code) {
		if (confirm('Are you sure that you wan\'t to delete this product ?')) {
			const newProduct = this.state.product.filter(value => value.id != code);
			this.setState({ product: newProduct });
		}
	},

	render: function () {
		let products = this.state.product.map(value =>
			React.createElement(Product, {
				key: value.id,
				id: value.id,
				productName: value.productName,
				price: value.price,
				rest: value.rest,
				isSelected: value.id == this.state.selectedItemId,
				photoUrl: value.photoUrl,
				cbSelectedItem: this.selectedItem,
				cbDeleteItem: this.deleteItem,
			})
		)

		return React.DOM.table({ className: 'Ishop' },
			React.DOM.thead({},
				React.DOM.tr({},
					React.DOM.th({
						className: 'storeTable',
						colSpan: 5
					},
						this.props.name))),
			React.DOM.thead({},
				React.DOM.tr({},
					React.DOM.th({ className: 'tableHeader' }, 'Product name'),
					React.DOM.th({ className: 'tableHeader' }, 'Price'),
					React.DOM.th({ className: 'tableHeader' }, 'Stock balance'),
					React.DOM.th({ className: 'tableHeader' }, 'Photo'),
					React.DOM.th({ className: 'tableHeader' }, 'Control'),
				)
			),
			React.DOM.tbody({}, products),
		)
	},
});