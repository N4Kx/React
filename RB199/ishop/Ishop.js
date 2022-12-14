let Ishop = React.createClass({
	displayName: 'Ishop',

	propTypes: {
		product: React.PropTypes.arrayOf(React.PropTypes.shape({
			productName: React.PropTypes.string,
			price: React.PropTypes.number,
			photoUrl: React.PropTypes.string,
			rest: React.PropTypes.number,
		})),
		name: React.PropTypes.string,
	},

	render: function () {

		let products = this.props.product.map(value =>
			React.DOM.tr({ key: value.id },
				React.DOM.td({ className: 'productName' }, value.productName),
				React.DOM.td({ className: 'price' }, value.price),
				React.DOM.td({ className: 'stockBalance' }, value.rest),
				React.DOM.td({ className: 'photoCell' },
					React.DOM.img({ className: 'img', src: value.photoUrl })))
		)

		return React.DOM.table({ className: 'Ishop' },
			React.DOM.thead({},
				React.DOM.tr({},
					React.DOM.th({ className: 'storeTable', colSpan: 4 }, this.props.name))),
			React.DOM.thead({},
				React.DOM.tr({},
					React.DOM.th({ className: 'tableHeader' }, 'Product name'),
					React.DOM.th({ className: 'tableHeader' }, 'Price'),
					React.DOM.th({ className: 'tableHeader' }, 'Stock balance'),
					React.DOM.th({ className: 'tableHeader' }, 'Photo'))),
			React.DOM.tbody({}, products))
	}
});