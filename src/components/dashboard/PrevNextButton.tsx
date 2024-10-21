import { Button, ButtonProps } from "../UI/button";

interface PrevNextButtonProps {
	onclick: () => void;
	text: string;
	className?: string;
	variant?: string;
}

function PrevNextButton({
	onclick,
	text,
	className = "",
	variant = "secondary",
}: PrevNextButtonProps) {
	return (
		<Button
			variant={variant as ButtonProps["variant"]}
			className={`${className} bg-blue-500 text-white w-[15ch]`}
			onClick={onclick}>
			{text}
		</Button>
	);
}

export default PrevNextButton;
