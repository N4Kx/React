import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css';



class BR2JSX extends React.Component {

	static propTypes = {
		text: PropTypes.string,
	}

	render() {
		let text = this.props.text;
		let newText = [];

		const regExp = /<br *\/?>/;

		text = text.split(regExp);

		for (let i = 0; i < text.length; i++) {
			if (i != 0)
				newText.push(<br key={i} />);
			newText.push(text[i]);
		}

		// text.reduce((prev, curr) => {
		// 	if (prev != false)
		// 		newText.push(<br key={curr} />);
		// 	newText.push(curr);
		// 	return newText
		// }, "");

		return (
			<div className='br2jsx' > {newText}</div>
		)
	}
}

export default BR2JSX;