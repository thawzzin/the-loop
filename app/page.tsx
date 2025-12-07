import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="p-5 flex justify-between items-center">
        <h1 className="text-4xl font-bold uppercase">The Loop</h1>
        <nav className="flex gap-5 list-none font-sans uppercase font-semibold mr-52">
          <Link href={"/"}>Events</Link>
          <Link href={"/"}>About</Link>
        </nav>
      </header>
    </div>
  );
}
