import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-4xl font-bold uppercase">The Loop</h1>
      <nav className="flex gap-5 list-none font-sans uppercase font-semibold w-[30%]">
        <Link href={"/"}>Events</Link>
        <Link href={"/"}>About</Link>
      </nav>
    </header>
  );
};

export default Header;
