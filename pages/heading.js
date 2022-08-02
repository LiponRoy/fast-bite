import React from 'react';

const Heading = () => {
	return (
		<div id='heading'>
			<div className=' relative h-screen w-full bg-slate-600 fcc'>
				<div className=' absolute bg-black/50 h-full w-full'></div>
				<img src='/img-all/foodheader.jpg' alt='' className=' w-full h-full object-cover' />
				<div className=' absolute top-0 bottom-0 left-0 right-0 my-auto mx-auto h-full w-full  fcc m-9 '>
					<span className=' text-8xl'>Fast Bite</span>
					<span className=' text-2xl my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
				</div>
			</div>
		</div>
	);
};

export default Heading;
