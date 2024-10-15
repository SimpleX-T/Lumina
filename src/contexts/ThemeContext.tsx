"use client";

import { createContext, useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../themes/theme";

const ThemeContext = createContext(lightTheme);

function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState(function () {
		return window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
			? darkTheme
			: lightTheme;
	});

	useEffect(function () {
		const storedTheme = localStorage.getItem("theme");

		if (storedTheme) setTheme(JSON.parse(storedTheme));
	}, []);

	return (
		<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
	);
}
