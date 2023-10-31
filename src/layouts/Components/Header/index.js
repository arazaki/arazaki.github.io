import * as React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header className="px-5 md:px-24 bg-white dark:bg-gray-900">
      <div className="container">
        <nav className="py-4 flex flex-wrap items-center justify-around text-gray-900 dark:text-white">
          <div className="flex flex-row gap-4 justify-start text-lg font-medium w-auto">
            <Link
              className="hover:underline"
              activeClassName="underline decoration-yellow-500 underline-offset-4"
              to="/portfolio"
            >
              Portfolio
            </Link>
            ·
            <Link
              className="hover:underline"
              activeClassName="underline decoration-yellow-500 underline-offset-4"
              to="/background"
            >
              Background
            </Link>
          </div>
          <div className="text-center order-first md:order-none flex-1 md:flex-auto mb-8 md:mb-0 min-w-full md:min-w-0">
            <Link
              to="/"
              className="hover:underline"
              activeClassName="underline decoration-yellow-500 underline-offset-4"
            >
              <div className="font-sans font-black text-3xl text-gray-400 dark:text-slate-200">
                <div className={`w-fit mx-auto`}>
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
