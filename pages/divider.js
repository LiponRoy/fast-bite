import React from 'react';

const Divider = ({ msg }) => {
	return (
		<div className=' my-4 flex justify-start'>
			<span className=' text-2xl'>{msg}</span>
		</div>
	);
};

export default Divider;
