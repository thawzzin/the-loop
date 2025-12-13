import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-5 pt-5">
      <Link
        href={"/"}
        className="text-4xl font-medium uppercase tracking-tight"
      >
        The Loop
      </Link>
      <nav className="flex gap-5 font-sans uppercase font-semibold w-[30%]">
        <Link href={"/events"} className="hover:italic">
          Events
        </Link>
        <Link href={"/"} className="hover:italic">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
