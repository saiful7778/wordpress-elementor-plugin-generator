import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">
        Make wordpress <br /> elementor plugin
      </h1>
      <p className="mt-4">
        <Link href="/plugin" className="text-blue-600 underline">
          plugin
        </Link>
      </p>
    </div>
  );
};

export default HomePage;
