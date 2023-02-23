export const Banner = () => {
  const title = "La Maison de la tech";
  return (
    <header className="h-28 flex justify-end items-center border-b-4 border-black bg-[#E0E0E0]">
      <div className="aspect-square">
        <img
          className="w-24 h-24 object-center object-cover"
          src="logo5.png"
          alt="/"
        />
      </div>
      <div className="items-center ">
        <h1 className="text-black px-5 font-extrabold text-2xl md:text-4xl subpixel-antialiased">
          {title}
        </h1>
      </div>
    </header>
  );
};
