import React from 'react';
import Link from 'next/link';
const Footer = () => {
	return (
		<div className='my-8 frc text-4xl text-red-600 cursor-pointer '>
			<Link href='/'>
				<span>Top</span>
			</Link>
		</div>
	);
};

export default Footer;
