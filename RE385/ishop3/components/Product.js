import React from 'react';

import './Product.css';

let Product = React.createClass({
	displayName: 'Product',

	propTypes: {
		id: React.PropTypes.number.isRequired,
		productName: React.PropTypes.string,
		price: React.PropTypes.number,
		rest: React.PropTypes.number,
		photoUrl: React.PropTypes.string,
		isSelected: React.PropTypes.bool,
		cbSelectedItem: React.PropTypes.func,
		cbDeleteItem: React.PropTypes.func,
	},

	select: function (eo) {
		this.props.cbSelectedItem(this.props.id);
	},

	delete: function (eo) {
		eo.stopPropagation();
		this.props.cbDeleteItem(this.props.id);
	},

	render: function () {
		return React.DOM.tr({ onClick: this.select, className: (this.props.isSelected) ? 'selected' : null },
			React.DOM.td({ className: 'productName' }, this.props.productName),
			React.DOM.td({ className: 'price' }, this.props.price),
			React.DOM.td({ className: 'stockBalance' }, this.props.rest),
			React.DOM.td({ className: 'photoCell' },
				React.DOM.img({
					className: 'img',
					src: this.props.photoUrl
				})),
			React.DOM.td({},
				React.DOM.input({
					className: 'deleteBtn',
					type: 'button',
					value: 'Delete',
					onClick: this.delete
				},),
			)
		)
	}
});

export default Product;