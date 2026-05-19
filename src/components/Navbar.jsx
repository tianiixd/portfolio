import logoImg from "../assets/logo.png";

function NavBar() {
  return (
    <header className=" w-full bg-surface shadow-sm">
      <div className=" mx-auto p-5 px-50 flex justify-between items-center">
        <div className="font-mono font-bold text-xl tracking-tight text-text-main">
          <a href="#home" className="flex items-center gap-2">
            <img
              src={logoImg}
              alt="My logo"
              className="w-8 h-8 object-contain"
            />
            <span>Tian</span>
          </a>

          <nav>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
