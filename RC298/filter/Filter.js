let Filter = React.createClass({
	displayName: 'Filter',

	propTypes: {
		defword: React.PropTypes.array.isRequired,
		defisSorted: React.PropTypes.bool.isRequired,
		deftext: React.PropTypes.string.isRequired,
	},

	getInitialState: function () {
		return {
			word: this.props.defword,
			isSorted: this.props.defisSorted,
			texttofilter: this.props.deftext,
			unsortedword: this.props.defword.slice(0),
		}
	},

	flagToFilter: function (eo) {
		if (eo.target.checked) {
			this.setState({ isSorted: eo.target.checked, word: this.state.word.slice(0).sort(), unsortedword: this.state.word.slice(0) })
		} else {
			this.setState({ isSorted: eo.target.checked, word: this.state.unsortedword })
		}
	},

	textToFilterChanged: function (eo) {
		if (this.state.isSorted) {
			this.setState({ word: this.props.defword.filter(v => v.includes(eo.target.value)).sort(), texttofilter: eo.target.value })
		} else {
			this.setState({ word: this.props.defword.filter(v => v.includes(eo.target.value)), texttofilter: eo.target.value })
		}
	},

	resetToDefault: function (eo) {
		this.setState({ isSorted: this.props.defisSorted, word: this.props.defword, texttofilter: this.props.deftext });
		console.log(`СБРОС!!!!`)

	},

	render: function () {
		// console.log(this.state);

		let words = this.state.word.map(value =>
			React.DOM.option({ key: value }, value));

		return React.DOM.div({ className: 'Filter' },
			React.DOM.input({
				className: 'Checkbox',
				type: 'checkbox',
				checked: this.state.isSorted,
				onChange: this.flagToFilter
			},),
			React.DOM.input({
				className: 'TextToFilter',
				type: 'text',
				defaultValue: this.props.deftext,
				onChange: this.textToFilterChanged
			},),
			React.DOM.input({
				className: 'ResetBtn',
				type: 'button',
				value: 'Сброс',
				onClick: this.resetToDefault
			},),
			React.DOM.br(),
			React.DOM.select({
				className: 'list',
				multiple: true
			}, words
			));
	}
})