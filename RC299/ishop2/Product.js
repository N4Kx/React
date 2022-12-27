let Product = React.createClass({
	displayName: 'Product',

	propTypes: {
		id: React.PropTypes.number,
		productName: React.PropTypes.string,
		price: React.PropTypes.number,
		rest: React.PropTypes.number,
		photoUrl: React.PropTypes.string,
		isSelected: React.PropTypes.bool,
		cbSelectedItem: React.PropTypes.func,
		cbDeleteItem: React.PropTypes.func,
	},

	getInitialState: function () {
		return {}
	},

	select: function (eo) {
		this.props.cbSelectedItem(this.props.id);
	},

	delete: function (eo) {
		eo.stopPropagation();
		this.props.cbDeleteItem(this.props.id);
	},

	render: function () {
		console.log(this.props);
		if (this.props.isSelected) {
			console.log(111);
			return React.DOM.tr({ onClick: this.select, className: 'selected' },
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
		} else {
			console.log(222);
			return React.DOM.tr({ onClick: this.select, className: '' },
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
	}
});