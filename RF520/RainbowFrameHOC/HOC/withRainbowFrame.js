import React from 'react';

let withRainbowFrame = colors => Comp => props => (
	colors.reduce((prev, curr) => {
		return (

			<div style={{ borderColor: curr, borderWidth: '3px', borderStyle: 'solid', padding: '5px' }}>
				{prev}
			</div>
		)
	}, <Comp {...props} />)
);

export { withRainbowFrame };