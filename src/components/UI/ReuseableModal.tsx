import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
// import ConfettiExplosion from "react-confetti-explosion";

type ReuseableModalType = "success" | "failure" | "casual" | "info" | "warning";

interface ButtonProps {
	text: string;
	onClick: () => void;
	variant?: "primary" | "secondary" | "danger";
}

interface ReuseableModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	content: string | React.ReactNode;
	type: ReuseableModalType;
	buttons?: ButtonProps[];
	showCloseButton?: boolean;
	closeOnOverlayClick?: boolean;
	customStyles?: React.CSSProperties;
	width?: string;
	height?: string;
}

const ReuseableModal: React.FC<ReuseableModalProps> = ({
	isOpen,
	onClose,
	title,
	content,
	type,
	buttons = [],
	showCloseButton = true,
	closeOnOverlayClick = true,
	customStyles = {},
	width = "400px",
	height = "auto",
}) => {
	const [showConfetti, setShowConfetti] = useState(false);

	useEffect(() => {
		if (isOpen && type === "success") {
			setShowConfetti(true);
			const timer = setTimeout(() => setShowConfetti(false), 2000);
			return () => clearTimeout(timer);
		}
	}, [isOpen, type]);

	if (!isOpen) return null;

	const getBackgroundColor = () => {
		switch (type) {
			case "success":
				return "bg-green-100";
			case "failure":
				return "bg-red-100";
			case "warning":
				return "bg-yellow-100";
			case "info":
				return "bg-blue-100";
			default:
				return "bg-white";
		}
	};

	const getButtonVariant = (variant: ButtonProps["variant"] = "primary") => {
		switch (variant) {
			case "primary":
				return "bg-blue-500 hover:bg-blue-600 text-white";
			case "secondary":
				return "bg-gray-500 hover:bg-gray-600 text-white";
			case "danger":
				return "bg-red-500 hover:bg-red-600 text-white";
		}
	};

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center'>
			<div
				className='absolute inset-0 bg-black opacity-50'
				onClick={closeOnOverlayClick ? onClose : undefined}
			/>
			<div
				className={`relative ${getBackgroundColor()} rounded-lg shadow-lg`}
				style={{ width, height, ...customStyles }}>
				{showConfetti && (
					<Confetti
						width={window.innerWidth}
						height={window.innerHeight}
						recycle={true}
					/>
				)}
				<div className='p-6'>
					<h2 className='text-xl font-bold mb-4 text-black'>
						{title}
					</h2>
					<div className='mb-6 text-black'>{content}</div>
					<div className='flex justify-end space-x-2'>
						{buttons.map((button, index) => (
							<button
								key={index}
								onClick={button.onClick}
								className={`px-4 py-2 rounded ${getButtonVariant(button.variant)}`}>
								{button.text}
							</button>
						))}
						{showCloseButton && (
							<button
								onClick={onClose}
								className='px-4 py-2 rounded bg-gray-300 hover:bg-gray-400'>
								Close
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReuseableModal;
