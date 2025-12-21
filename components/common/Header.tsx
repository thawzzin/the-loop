"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between md:items-center p-4 md:p-5">
      <Link
        href={"/"}
        className="text-4xl font-medium uppercase tracking-tight hover:text-secondary transition-colors duration-300"
      >
        The Loop
      </Link>
      <nav className="hidden md:flex gap-5 font-sans uppercase font-semibold w-[30%]">
        <Link href={"/events"} className="hover:italic">
          Events
        </Link>
        <Link href={"/about"} className="hover:italic">
          About
        </Link>
      </nav>

      {/* mobile menu */}
      <>
        <input
          id="mobile-menu-toggle"
          type="checkbox"
          className="sr-only peer"
        />

        <label
          htmlFor="mobile-menu-toggle"
          className="md:hidden flex gap-2 cursor-pointer"
          aria-hidden="true"
        >
          <span className="text-sm font-sans font-semibold uppercase">
            Menu
          </span>
        </label>

        <div className="flex flex-col fixed inset-x-0 top-0 h-screen p-4 bg-primary text-background transform scale-y-0 origin-top transition-transform duration-300 ease-out z-50 peer-checked:scale-y-100 md:hidden">
          <div className="flex justify-between">
            <Link
              href={"/"}
              className="text-4xl font-medium uppercase tracking-tight hover:text-secondary transition-colors duration-300"
            >
              The Loop
            </Link>
            <label
              htmlFor="mobile-menu-toggle"
              className="text-sm font-semibold cursor-pointer font-sans uppercase"
            >
              Close
            </label>
          </div>

          <nav className="flex flex-col font-sans text-3xl mt-10">
            <Link
              href="/events"
              className="text-3xl font-semibold tracking-tight"
              onClick={() => {
                const menu = document.getElementById(
                  "mobile-menu-toggle"
                ) as HTMLInputElement;
                if (menu) menu.checked = false;
              }}
            >
              Events
            </Link>
            <Link
              href="/about"
              className="text-3xl font-semibold tracking-tight"
              onClick={() => {
                const menu = document.getElementById(
                  "mobile-menu-toggle"
                ) as HTMLInputElement;
                if (menu) menu.checked = false;
              }}
            >
              About
            </Link>
            <Link
              href="/"
              className="text-3xl font-semibold tracking-tight"
              onClick={() => {
                const menu = document.getElementById(
                  "mobile-menu-toggle"
                ) as HTMLInputElement;
                if (menu) menu.checked = false;
              }}
            >
              Home
            </Link>
          </nav>
          <p className="font-sans text-secondary text-sm mt-auto">
            Your city’s stage for everything live — music, art, and culture
            brought together in one place. Stay connected.
          </p>
        </div>
      </>
    </header>
  );
};

export default Header;
