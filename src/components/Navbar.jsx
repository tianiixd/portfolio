import logoImg from "../assets/logo.png";

function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-surface border-b border-gray-200">
      <div className="max-w-7xl mx-auto py-5 px-6 md:px-12 flex justify-between items-center">
        <div className="font-mono font-bold text-xl tracking-tight">
          <a href="#home" className="flex items-center gap-2">
            <img
              src={logoImg}
              alt="My logo"
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
                className="relative pb-2 hover:text-brand duration-300 ease-in-out after:content-[''] after:absolute"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="relative pb-2 hover:text-brand duration-300 ease-in-out "
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="relative pb-2 hover:text-brand transition-colors duration-300 ease-in-out"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#reflection"
                className="relative pb-2 hover:text-brand transition-colors duration-300 ease-in-out"
              >
                Reflection
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
