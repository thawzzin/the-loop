import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-white p-5">
      <div className="grid grid-cols-2 ">
        <h5 className="text-3xl">The Loop</h5>
        <div className="flex flex-col font-sans font-medium uppercase">
          <Link href={"/events"} className="hover:italic">
            Events
          </Link>
          <Link href={""} className="hover:italic">
            About
          </Link>
          <Link href={""} className="hover:italic">
            Contact
          </Link>
        </div>
      </div>
      <hr className="border-t border-secondary/50 mb-5 mt-10" />
      <div className="flex gap-x-5 font-sans font-medium uppercase">
        <Link href={""} className="hover:italic">
          Instagram
        </Link>
        <Link href={""} className="hover:italic">
          LinkedIn
        </Link>
        <Link href={""} className="hover:italic">
          Mail
        </Link>
        <p className="ml-auto text-secondary">©Thaw Zin 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
