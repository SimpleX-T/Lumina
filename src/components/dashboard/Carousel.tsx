import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
	id: string | number;
	content: React.ReactNode;
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
		<div className='relative w-full h-64 overflow-hidden'>
			{items.map((item, index) => (
				<div
					key={item.id}
					className={`absolute w-full h-full transition-opacity duration-500 ${
						index === currentIndex ? "opacity-100" : "opacity-0"
					}`}>
					{item.content}
				</div>
			))}
			{withButtons && (
				<>
					<button
						onClick={goToPrevious}
						className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2'>
						<ChevronLeft className='w-6 h-6' />
					</button>
					<button
						onClick={goToNext}
						className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2'>
						<ChevronRight className='w-6 h-6' />
					</button>
				</>
			)}
			<div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
				{items.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentIndex(index)}
						className={`w-3 h-3 rounded-full ${
							index === currentIndex
								? "bg-white w-6"
								: "bg-white bg-opacity-50 w-3"
						}`}
					/>
				))}
			</div>
		</div>
	);
};

export default Carousel;
