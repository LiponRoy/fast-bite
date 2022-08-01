import React from 'react';

const Navbar = () => {
	return (
		<div>
			<div className=' w-full bg-red-900 h-14 '>
				<div className='h-full flex justify-between text-slate-200 px-4'>
					<div className='h-full flex justify-start items-center flex-1 '>
						<span>Logo Me</span>
					</div>
					<div className='h-full flex justify-end items-center flex-1 gap-4 '>
						<span className=' cursor-pointer hover:text-white'>Home</span>
						<span className=' cursor-pointer hover:text-white'>Contact</span>
						<span className=' cursor-pointer hover:text-white'>About</span>
						<span className=' cursor-pointer hover:text-white'>Adding</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
