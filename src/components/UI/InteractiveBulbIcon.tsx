"use client";

import React, { useState, useEffect, useCallback } from "react";

interface InteractiveLightBulbProps {
	illuminationPercentage?: number;
	isBlinking?: boolean;
	minBlinkDuration?: number;
	maxBlinkDuration?: number;
	width?: number;
	height?: number;
}

const InteractiveBulbIcon: React.FC<InteractiveLightBulbProps> = ({
	illuminationPercentage = 0,
	isBlinking = false,
	minBlinkDuration = 50,
	maxBlinkDuration = 500,
	width = 100,
	height = 100,
}) => {
	const [isOn, setIsOn] = useState<boolean>(true);

	const clampedIllumination: number = Math.min(
		100,
		Math.max(0, illuminationPercentage)
	);

	const getRandomBlinkDuration = useCallback((): number => {
		return (
			Math.random() * (maxBlinkDuration - minBlinkDuration) +
			minBlinkDuration
		);
	}, [minBlinkDuration, maxBlinkDuration]);

	useEffect(() => {
		let timeoutId: NodeJS.Timeout | null = null;

		const blink = () => {
			setIsOn((prev) => !prev);
			timeoutId = setTimeout(blink, getRandomBlinkDuration());
		};

		if (isBlinking) {
			timeoutId = setTimeout(blink, getRandomBlinkDuration());
		}

		return () => {
			if (timeoutId) clearTimeout(timeoutId);
		};
	}, [isBlinking, getRandomBlinkDuration]);

	const getBulbOpacity = (): number => {
		if (isBlinking) {
			return isOn ? 0.7 : 0;
		}
		return clampedIllumination / 100;
	};

	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 100 100'
			xmlns='http://www.w3.org/2000/svg'>
			{/* Bulb base */}
			<path
				d='M40 80 H60 V90 H40 Z'
				fill='#a0a0a0'
			/>
			<path
				d='M45 90 H55 V95 H45 Z'
				fill='#808080'
			/>

			{/* Bulb glass - rounded top */}
			<path
				d='M35 80 Q35 30 50 25 Q65 30 65 80 Z'
				fill='#f0f0f0'
				stroke='#d0d0d0'
				strokeWidth='2'
			/>

			{/* Illumination */}
			<path
				d='M35 80 Q35 30 50 25 Q65 30 65 80 Z'
				fill={`rgba(255, 255, 0, ${getBulbOpacity()})`}
			/>

			{/* Filament */}
			<path
				d='M45 75 Q50 65 55 75'
				fill='none'
				stroke='#c0c0c0'
				strokeWidth='2'
			/>

			{/* Reflection */}
			<ellipse
				cx='43'
				cy='40'
				rx='3'
				ry='10'
				fill='#ffffff'
				opacity='0.3'
			/>
		</svg>
	);
};

export default InteractiveBulbIcon;
