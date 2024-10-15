import React from "react";
import styles from "./HamburgerMenu.module.css";

const HamburgerMenu = ({
	isOpen,
	toggleMenu,
}: {
	isOpen: boolean;
	toggleMenu: () => void;
}) => {
	return (
		<div
			className={styles.hamburger}
			onClick={toggleMenu}>
			<div
				className={`${styles.line} ${isOpen ? styles.open : ""}`}></div>
			<div
				className={`${styles.line} ${isOpen ? styles.open : ""}`}></div>
			<div
				className={`${styles.line} ${isOpen ? styles.open : ""}`}></div>
		</div>
	);
};

export default HamburgerMenu;
