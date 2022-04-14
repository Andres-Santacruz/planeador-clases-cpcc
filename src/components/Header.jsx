export const Header = () => {
  return (
    <header className="border-slate-900 border-b-2 bg-gray-300">
      <nav className="flex p-4 items-center">
        <div className="w-24 ">
          <img
            src="/assets/logo.344c07fc.png"
            alt="escudo CPCC"
            className="w-20"
          />
        </div>
        <h1 className="text-center my-0 mx-auto sm:text-5xl text-3xl">
          Planeador CPCC
        </h1>
      </nav>
    </header>
  );
};
