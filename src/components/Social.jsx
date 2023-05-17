import React from 'react';

const Social = ({
	icon,
	link,
	buttonText = 'Listen',
	height = 'h-auto',
	width = 'w-2/6',
}) => {
	const imageScaling = `${height} ${width} w-2/6 object-scale-down`;

	return (
		<div className='flex w-full justify-between items-center border-b-2 border-slate-200 p-3 bg-slate-50'>
			<img className={imageScaling} src={icon} alt='' />
			<button className='bg-transparent flex justify-center items-center h-8 w-24 hover:bg-slate-500 text-slate-700 hover:text-white py-2 px-4 border border-slate-300 hover:border-transparent rounded'>
				<a href={link} alt='' target='_blank' rel='noreferrer'>
					{buttonText}
				</a>
			</button>
		</div>
	);
};

export default Social;
