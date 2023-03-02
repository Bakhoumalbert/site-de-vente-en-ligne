import { AiOutlineSearch } from "react-icons/ai";

export const Header = () => {
  const title = "New tech";
  return (
    <header className="h-12 px-2 flex justify-center items-center border-b-2 border-black bg-[#E0E0E0] sticky top-0">
      <form className="flex items-center ml-8">
        <img
          className="w-10 h-10 object-cover mr-4"
          src="ordinateur.png"
          alt="/"
        />
        <div>
          <input
            className="w-[300px] sm:w-[400px] rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
            type="text"
            placeholder="Rechercher un produit"
          />
        </div>
        <div>
          <button className="rounded-r-xl ">
            <AiOutlineSearch
              size={20}
              className="icon"
              style={{ color: "#fffff" }}
            />
          </button>
        </div>
      </form>
      <div className="items-center ">
        <h1 className="text-[#12aec6] px-5 font-extrabold md:text-4xl subpixel-antialiased">
          {title}
        </h1>
      </div>
    </header>
  );
};
