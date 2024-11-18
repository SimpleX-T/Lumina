//

// AudioComponent.tsx
import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Download } from "lucide-react";

interface AudioComponentProps {
	audioFileLocation: string;
}

export function AudioComponent({ audioFileLocation }: AudioComponentProps) {
	const [isPlaying, setIsPlaying] = useState(false);
	const [duration, setDuration] = useState<number>(0); // Change to number
	const [currentTime, setCurrentTime] = useState<number>(0); // Change to number
	const audioRef = useRef<HTMLAudioElement | null>(null);

	const togglePlayPause = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause();
			} else {
				audioRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = audioFileLocation;
		link.download = audioFileLocation.split("/").pop() || "audio-file.mp3";
		link.click();
	};

	function formatTime(time: number) {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
	}

	// Effect to get duration when metadata is loaded
	useEffect(() => {
		function handleLoadedMetadata() {
			if (audioRef.current) {
				setDuration(audioRef.current.duration); // Set duration as a number
			}
		}

		function handleTimeUpdate() {
			if (audioRef.current) {
				setCurrentTime(audioRef.current.currentTime); // Set currentTime as a number
			}
		}

		if (audioRef.current) {
			audioRef.current.addEventListener(
				"loadedmetadata",
				handleLoadedMetadata
			);
			audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
		}

		return () => {
			if (audioRef.current) {
				audioRef.current.removeEventListener(
					"loadedmetadata",
					handleLoadedMetadata
				);
				audioRef.current.removeEventListener(
					"timeupdate",
					handleTimeUpdate
				);
			}
		};
	}, [audioFileLocation]);

	return (
		<div className='bg-indigo-100 rounded-lg p-6'>
			<audio
				ref={audioRef}
				src={audioFileLocation}
				preload='metadata'
			/>
			<h3 className='text-lg font-semibold mb-4 text-indigo-800'>
				Audio Lesson
			</h3>
			<div className='flex items-center justify-between mb-4'>
				<button
					disabled={audioFileLocation.length < 1}
					onClick={togglePlayPause}
					className='bg-indigo-500 text-white p-2 rounded-full hover:bg-indigo-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'>
					{isPlaying ? <Pause size={24} /> : <Play size={24} />}
				</button>
				<div className='flex-1 mx-4 h-2 bg-indigo-200 rounded-full'>
					<div
						style={{
							width:
								duration > 0
									? `${(currentTime / duration) * 100}%`
									: "0%",
						}}
						className='h-full bg-indigo-500 rounded-full'></div>
				</div>
				<span className='text-indigo-800'>
					{formatTime(currentTime)} / {formatTime(duration)}
				</span>
			</div>
			<button
				className='flex items-center text-indigo-700 hover:text-indigo-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
				onClick={handleDownload}
				disabled={audioFileLocation.length < 1}>
				<Download
					size={20}
					className='mr-2'
				/>
				Download Audio
			</button>
		</div>
	);
}

export default AudioComponent;
