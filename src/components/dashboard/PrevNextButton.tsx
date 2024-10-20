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
			className={`${className}`}
			onClick={onclick}>
			{text}
		</Button>
	);
}

export default PrevNextButton;
