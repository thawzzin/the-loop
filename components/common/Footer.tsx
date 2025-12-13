import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-white p-5">
      <div className="grid grid-cols-2 ">
        <h5 className="text-3xl">The Loop</h5>
        <div className="flex flex-col font-sans font-medium uppercase">
          <Link href={""}>Events</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contact</Link>
        </div>
      </div>
      <hr className="border-t border-secondary/50 mb-5 mt-10" />
      <div className="flex gap-x-5 font-sans font-medium uppercase">
        <Link href={""}>Instagram</Link>
        <Link href={""}>LinkedIn</Link>
        <Link href={""}>Mail</Link>
        <p className="ml-auto text-secondary">©Thaw Zin 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
