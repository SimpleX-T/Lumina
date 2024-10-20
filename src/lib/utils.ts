import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDuration(duration: number) {
	const hours = Math.floor(duration / 360_000_000);
	const minutes = Math.floor(duration / 6_000_000);
	return `${hours}h ${minutes}m`;
}
