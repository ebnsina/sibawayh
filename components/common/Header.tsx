import Link from "next/link";
import Logo from "./Logo";

function Header() {
  return (
    <header className="py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />

        <nav>
          <ul className="flex items-center space-x-3">
            <li>
              <Link
                className="block px-4 py-3 rounded-xl transition hover:bg-slate-700"
                href="/classes"
              >
                Classes
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-3 rounded-xl transition hover:bg-slate-700"
                href="/notice"
              >
                Notice
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
