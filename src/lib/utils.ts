import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDuration(duration: number) {
	const hours = Math.floor(duration / 3600000);
	const minutes = Math.floor(duration / 60000);
	return `${hours}h ${minutes}m`;
}
