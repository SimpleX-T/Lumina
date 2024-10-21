"use client";

import { FaRegCirclePlay } from "react-icons/fa6";

export default function VideoCard({
	url,
	title,
}: {
	url: string;
	title: string;
}) {
	return (
		<div className='space-y-3 h-96'>
			<div className='h-72 w-full bg-secondary-100/50 rounded-lg relative'>
				<iframe
					src={url}
					title='YouTube video player'
					frameBorder='0'
					allowFullScreen
					className='w-full h-full'></iframe>
			</div>
			<div>
				<h1 className='flex gap-2 items-center text-xl font-medium'>
					{/* <span>
						<PiVideoFill className="text-xl text-primary" />
					</span> */}
					{title}
				</h1>
				<span className='mt-2 rounded-full bg-slate-600 p-1 px-[5px] font-medium text-sm flex items-center w-fit gap-1'>
					<img
						src='/Images/Base_Symbol_Blue.svg'
						width={20}
						alt='_base'
					/>
					Base
				</span>
			</div>
		</div>
	);
}
