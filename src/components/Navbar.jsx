import { useState, useEffect } from "react";
import logoImg from "../assets/logo.png";
import { Menu, X, Sun, Moon } from "lucide-react";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"),
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-surface dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto py-5 px-6 md:px-12 flex justify-between items-center">
        <div className="font-mono font-bold text-xl tracking-tight">
          <a href="#home" className="flex items-center gap-2">
            <img
              src={logoImg}
              alt="My own logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-text-main dark:text-gray-100 transition-colors">
              Tian
            </span>
          </a>
        </div>
        <nav className="hidden md:block">
          <ul className="flex font-mono font-bold text-sm text-text-muted dark:text-gray-400 gap-10">
            <li>
              <a
                href="#home"
                className="relative pb-1 hover:text-brand duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-brand after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:ease-out"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="relative pb-1 hover:text-brand duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-brand after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:ease-out"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="relative pb-1 hover:text-brand duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-brand after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:ease-out"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="relative pb-1 hover:text-brand duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-brand after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:ease-out "
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#reflection"
                className="relative pb-1 hover:text-brand duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-brand after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:ease-out"
              >
                Reflection
              </a>
            </li>
            <li>
              <a
                href="#certificates"
                className="relative pb-1 hover:text-brand duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-brand after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:ease-out"
              >
                Certificates
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="relative pb-1 hover:text-brand duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-brand after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:ease-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 duration-300 ease-in-out cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <button
            className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-brand duration-300 ease-in-out"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg transition-colors duration-300">
          <ul className="flex flex-col font-mono font-bold text-sm text-gray-700 dark:text-gray-300 py-4 px-6 gap-6">
            <li>
              <a
                href="#home"
                onClick={closeMenu}
                className="block hover:text-brand transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="block hover:text-brand transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={closeMenu}
                className="block hover:text-brand transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={closeMenu}
                className="block hover:text-brand transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#reflection"
                onClick={closeMenu}
                className="block hover:text-brand transition-colors"
              >
                Reflection
              </a>
            </li>
            <li>
              <a
                href="#certificates"
                onClick={closeMenu}
                className="block hover:text-brand transition-colors"
              >
                Certificates
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block hover:text-brand transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default NavBar;
