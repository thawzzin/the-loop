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
        <Link href={"/"} className="hover:italic">
          About
        </Link>
      </nav>
      <nav className="md:hidden">
        <p className="text-sm font-sans font-semibold uppercase">Menu</p>
      </nav>
    </header>
  );
};

export default Header;
