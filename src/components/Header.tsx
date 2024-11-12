import { Link } from "react-router-dom";
import { useTheme } from "../context/theme-provider";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <h1
            className={`items-center 
            ${
              theme === "dark" ? "text-white" : "text-black"
            } tracking-[.40em] font-bold text-xl`}
          >
            KLIMA
          </h1>
        </Link>
        <div
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className={`flex items-center cursor-pointer transition-transform duration-500 
          ${isDark ? "rotate-180" : "rotate-0"}
          `}
        >
          {isDark ? (
            <Sun className="h-6 w-6 text-yellow-500 rotate-0 transation-all" />
          ) : (
            <Moon className="h-6 w-6 text-yelbluelow-500 rotate-0 transation-all" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;