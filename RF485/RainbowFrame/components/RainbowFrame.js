import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {

	render() {
		const children = this.props.children;
		const colors = this.props.colors;

		const items = colors.reduce((prev, curr) => {
			return (
				<div className='colored' style={{ borderColor: curr }}>
					{prev}
				</div>
			)
		}, <div className='Стартовый div'>{children}</div>)

		return (
			<Fragment>
				{items}
			</Fragment>
		)
	}
}

export default RainbowFrame;