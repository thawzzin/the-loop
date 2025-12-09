import Header from "@/components/common/Header";

export default function Home() {
  return (
    <div className="p-5 min-h-screen">
      <Header />
      <div className="flex justify-between mt-5">
        <h1 className="text-[210px] font-medium leading-[0.8] tracking-tight">
          The Loop <br />- Bangkok
        </h1>
        <p className="font-sans text-2xl w-[30%]">
          Your city’s stage for everything live — music, art, and culture
          brought together in one place. Stay connected.
        </p>
      </div>
    </div>
  );
}
