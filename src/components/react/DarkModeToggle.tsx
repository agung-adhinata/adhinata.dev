import { CONST_LC_DARK_MODE_KEY } from "@/constants/dark-mode";
import { useCallback, useSyncExternalStore } from "react";
import { VisibleContainer } from "./reusable/VisibleContainer";

type DarkModeToggleValue = "light" | "dark" | null;

function useLocalStorageDarkMode() {
  const subs = useCallback(
    (callbacks: (this: Window, ev: StorageEvent) => void) => {
      window.addEventListener("storage", callbacks);
      return () => window.removeEventListener("storage", callbacks);
    },
    [],
  );

  const getSnaps = () => {
    const stored = localStorage.getItem(CONST_LC_DARK_MODE_KEY);
    return stored ? (stored as DarkModeToggleValue) : null; // null = system prefered
  };

  const data = useSyncExternalStore(subs, getSnaps, getSnaps);

  const setData = (newData: DarkModeToggleValue | null) => {
    if (!newData) {
      localStorage.removeItem(CONST_LC_DARK_MODE_KEY);
      window.dispatchEvent(
        new StorageEvent("storage", { key: CONST_LC_DARK_MODE_KEY }),
      );
      return;
    }
    localStorage.setItem(CONST_LC_DARK_MODE_KEY, newData);
    window.dispatchEvent(
      new StorageEvent("storage", { key: CONST_LC_DARK_MODE_KEY }),
    );
  };

  return [data, setData] as const;
}

export function DarkModeToggle() {
  const [darkMode, setDarkMode] = useLocalStorageDarkMode();

  const isSystem = darkMode != null;
  const iconCode = !isSystem
    ? "monitor"
    : darkMode == "light"
      ? "light_mode"
      : "dark_mode";

  const handleDarkModeToggle = () => {
    console.log("test");
    if (!darkMode) {
      setDarkMode("dark");
      return;
    }
    if (darkMode == "dark") {
      setDarkMode("light");
    }
    if (darkMode == "light") {
      setDarkMode("dark");
    }
  };
  const handleToSystemTheme = () => {
    setDarkMode(null);
  };

  return (
    <div className="flex gap-2 transition-opacity">
      <button
        className="flex items-center justify-center rounded-xs p-2 transition-colors hover:bg-amber-500 hover:dark:bg-amber-400 hover:dark:text-neutral-900"
        onClick={() => {
          handleDarkModeToggle();
        }}
      >
        <span className="material-symbols-outlined size-6 cursor-pointer select-none">
          {iconCode}
        </span>
      </button>
      <VisibleContainer visible={isSystem}>
        <button
          className="flex items-center justify-center rounded-xs p-2 transition-colors hover:text-amber-500 hover:dark:text-amber-400"
          onClick={() => {
            handleToSystemTheme();
          }}
        >
          <span className="material-symbols-outlined size-6 cursor-pointer select-none">
            monitor
          </span>
        </button>
      </VisibleContainer>
    </div>
  );
}
