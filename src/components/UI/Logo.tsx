import Link from "next/link";
import Image from "next/image";
import InteractiveBulbIcon from "./InteractiveBulbIcon";

function Logo() {
	return (
		<Link
			href='/'
			className='flex items-center p-2 overflow-hidden justify-center'>
			<Image
				src='/Images/Lumina_png.png'
				alt='logo'
				width={100}
				height={100}
			/>
		</Link>
	);
}

export default Logo;
