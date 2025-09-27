import { useThemeStore } from "../stores/useThemeStore";
import { CiLight } from "react-icons/ci";
import { MdOutlineNightlight } from "react-icons/md";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();
  console.log(theme);

  return (
    <button
      onClick={toggleTheme}
      className="px-2 rounded-full py-2 cursor-pointer bg-gray-200 dark:bg-primaryBlack dark:text-white  text-gray-700"
    >
      {theme === "light" ? <MdOutlineNightlight /> : <CiLight />}
    </button>
  );
}
