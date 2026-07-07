import { CONST_LC_DARK_MODE_KEY } from "@/constants/dark-mode";

function syncDarkMode() {
    const localStorageTheme = localStorage.getItem(CONST_LC_DARK_MODE_KEY)
    console.log("dark mode sync")
    document.documentElement.classList.toggle(
        "dark",
        localStorageTheme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
}



function toggleLight() {
    localStorage.setItem(CONST_LC_DARK_MODE_KEY, "light")
    syncDarkMode()
}

function toggleDark() {
    localStorage.setItem(CONST_LC_DARK_MODE_KEY, "dark")
    syncDarkMode()
}

function toggleSystem() {
    localStorage.removeItem(CONST_LC_DARK_MODE_KEY)
    syncDarkMode()
}


export const appthemeDarkMode ={
    toggleDark,
    toggleLight,
    toggleSystem,
    syncDarkMode,
}