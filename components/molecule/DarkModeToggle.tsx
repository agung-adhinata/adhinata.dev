"use client";

import { Button } from "@/components/atom/Button";
import { useEffect, useState } from "react";
import {
	RiSunLine,
	RiMoonLine,
	RiComputerLine,
	RiLoaderLine,
	RiLoader4Line,
} from "react-icons/ri";

type ThemeSelector = undefined | "dark" | "light"

function useTheme() {
	const [theme, setTheme] = useState<ThemeSelector>(undefined);
	const toggleTheme = () => {
		if (theme === "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	};
	useEffect(() => {
		if (window != undefined) {
			if (localStorage.getItem("theme") === "dark") setTheme("dark");
			else setTheme("light");
		}
	}, []);
	useEffect(() => {
		if (theme == "dark") {
			localStorage.setItem("theme", "dark");
			document.documentElement.classList.add("dark");
		} else {
			localStorage.setItem("theme", "light");
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);
	return { theme, toggleTheme, setTheme };
}

export default function DarkModeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button onClick={toggleTheme} size={"icon"}>
			{theme === undefined ? (
				<RiLoader4Line className="animate-spin" />
			) : theme === "light" ? (
				<RiSunLine />
			) : theme === "dark" ? (
				<RiMoonLine />
			) : (
				<RiComputerLine />
			)}
		</Button>
	);
}
