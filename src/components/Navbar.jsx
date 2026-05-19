import { useState } from "react";
import logoImg from "../assets/logo.png";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-surface border-b border-gray-200">
      <div className="max-w-7xl mx-auto py-5 px-6 md:px-12 flex justify-between items-center">
        <div className="font-mono font-bold text-xl tracking-tight">
          <a href="#home" className="flex items-center gap-2">
            <img
              src={logoImg}
              alt="My own logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-text-main">Tian</span>
          </a>
        </div>
        <nav className="hidden md:block">
          <ul className="flex font-mono font-bold text-sm text-text-muted gap-10">
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
          </ul>
        </nav>

        <button
          className="md:hidden p-2 text-gray-600 hover:text-brand transition-colors"
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

      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg">
          <ul className="flex flex-col font-mono font-bold text-sm text-gray-700 py-4 px-6 gap-6">
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
          </ul>
        </nav>
      )}
    </header>
  );
}

export default NavBar;
