import { menus } from "@/data/menus";
import Link from "next/link";
import Logo from "./Logo";

function Header() {
  return (
    <header className="py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />

        <nav>
          <ul className="flex items-center space-x-2 text-sm md:text-base">
            {menus.map((menu) => (
              <li key={menu.id}>
                <Link
                  className="block px-4 py-2 rounded-full transition hover:bg-slate-900 hover:text-primary"
                  href={menu.href}
                >
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
