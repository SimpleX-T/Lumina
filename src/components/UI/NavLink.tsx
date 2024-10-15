import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

interface NavLinkProps {
	to: string;
	className?: string;
	children: ReactNode;
}

export default function NavLink({
	to = "/",
	className = "",
	children,
}: NavLinkProps): React.JSX.Element {
	const pathname = usePathname();

	return (
		<Link
			href={to}
			className={`${pathname === to ? "active" : ""} ${className}`}>
			{children}
		</Link>
	);
}
