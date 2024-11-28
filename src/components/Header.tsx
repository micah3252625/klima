import { Link } from "react-router-dom";
import { useTheme } from "../context/theme-provider";

import { ThemeToggle } from "./ThemeToggle";
import { CitySearch } from "./CitySearch";

const Header = () => {
  const { theme } = useTheme();

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
        
        <div className="flex gap-4">
          <CitySearch />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
