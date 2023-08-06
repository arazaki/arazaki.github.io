import * as React from "react";
import { Link } from "gatsby";

const Header = () => {
  const isHome = React.useRef(window.location.pathname === "/");

  return (
    <header className="px-5 md:px-24 bg-white dark:bg-gray-900">
      <div className="container">
        <nav className="py-4 flex flex-wrap items-center justify-around text-gray-900 dark:text-white">
          <div className="text-lg font-medium w-auto">
            <Link
              className="hover:shadow-bottom transition-shadow"
              to="/#portfolio"
            >
              Portfolio
            </Link>
          </div>
          <div className="text-center order-first md:order-none flex-1 md:flex-auto mb-8 md:mb-0 min-w-full md:min-w-0">
            <Link to="/">
              <div className="font-sans font-black text-3xl text-gray-400 dark:text-slate-200">
                <div
                  className={`w-fit mx-auto hover:shadow-bottom transition-shadow ${
                    isHome.current ? "shadow-bottom" : ""
                  }`}
                >
                  arazaki<span className="text-black dark:text-white">.</span>
                  <span className="text-yellow-500">dev</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex text-right w-auto">
            <a href="/contact" className="btn-primary">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
