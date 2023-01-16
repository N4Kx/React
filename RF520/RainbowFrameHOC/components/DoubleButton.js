import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './DoubleButton.css';

class DoubleButton extends React.Component {
	static propTypes = {
		caption1: PropTypes.string,
		caption2: PropTypes.string,
		cbPressed: PropTypes.func,
	}

	pushedBtn = (eo) => {
		// this.props.cbPressed(eo.target.value); - это я тестил нажатие конкретной кнопки
		if (eo.target.value == this.props.caption1)
			this.props.cbPressed(1);
		if (eo.target.value == this.props.caption2)
			this.props.cbPressed(2);
	}

	render() {
		return (
			<Fragment>
				<input type='button' value={this.props.caption1} onClick={this.pushedBtn} />{this.props.children}<input type='button' value={this.props.caption2} onClick={this.pushedBtn} />
			</Fragment>
		)
	}
}

export default DoubleButton;