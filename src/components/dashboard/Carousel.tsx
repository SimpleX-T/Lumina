import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface CarouselItem {
	id: string | number;
	content: React.ReactNode;
	url: string;
	image?: string;
}

interface CarouselProps {
	items: CarouselItem[];
	interval?: number;
	autoPlay?: boolean;
	withButtons?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
	items,
	interval = 3000,
	autoPlay = true,
	withButtons = false,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (!autoPlay) return;

		const timer = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
		}, interval);

		return () => clearInterval(timer);
	}, [items.length, interval, autoPlay]);

	const goToNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
	};

	const goToPrevious = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + items.length) % items.length
		);
	};

	return (
		<div className='relative w-full h-64 overflow-hidden rounded-lg shadow-lg'>
			{items.map((item, index) => (
				<div
					key={item.id}
					className={`absolute w-full h-full transition-opacity duration-500 ${
						index === currentIndex ? "opacity-100" : "opacity-0"
					} flex items-center flex-col justify-center text-white text-2xl font-bold`}
					style={{
						backgroundImage: item.image
							? `url(${item.image})`
							: "linear-gradient(to bottom right, #1d2732, #001123)",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}>
					<div className='w-full h-full flex items-center justify-center flex-col gap-4 bg-black/5'>
						<h2>{item.content}</h2>

						<Link
							href={item.url}
							className='text-md block text-center underline'>
							Learn More
						</Link>
					</div>
				</div>
			))}
			{withButtons && (
				<>
					<button
						onClick={goToPrevious}
						className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors duration-200'>
						<ChevronLeft className='w-6 h-6' />
					</button>
					<button
						onClick={goToNext}
						className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors duration-200'>
						<ChevronRight className='w-6 h-6' />
					</button>
				</>
			)}

			<div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
				{items.map((_, index) => (
					<button
						key={index}
						onClick={function handleClickIndicator() {
							setCurrentIndex(index);
						}}
						className={`w-3 h-3 rounded-full transition-all duration-200 ${
							index === currentIndex
								? "bg-white w-6"
								: "bg-white bg-opacity-50 w-3 hover:bg-opacity-75"
						}`}
					/>
				))}
			</div>
		</div>
	);
};

export default Carousel;
