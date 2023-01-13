import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css';



class BR2JSX extends React.Component {

	static propTypes = {
		text: PropTypes.string,
	}

	render() {
		let text = this.props.text;

		const regExp2 = /<br>/g;
		const regExp1 = /<br\/>/g;
		const regExp3 = /<br \/>/g;

		text = text.replace(regExp1, '_<br/>_');
		text = text.replace(regExp2, '_<br/>_');
		text = text.replace(regExp3, '_<br/>_');

		text = text.split('_');

		text = text.map(value => {
			return (value == '<br/>') ? <br /> : value;
		})

		return (
			<div className='br2jsx'>{text}</div>
		)
	}
}

export default BR2JSX;