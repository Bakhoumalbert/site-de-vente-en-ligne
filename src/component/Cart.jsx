import { listProduits } from "../datas/Listproduits";

export const Cart = ({cart, setCart}) => {

  const categories = listProduits.reduce(
    (arr, elem) =>
      arr.includes(elem.category) ? arr : arr.concat(elem.category),
    []
  );
  console.log(categories);
  // filtrage des categories d'ordinateur
  const categorieOrdi = (category) => listProduits.filter((cateOrdi) => category === cateOrdi.category)

  return (
    <div className="w-1/5 bg-[#24cbc2] h-screen text-white mt-6">
      <h2 className="font-bold ml-2 md:ml-6 md:text-xl mb-7 mt-4 items-start">
        Catégories
      </h2>
      <ul className="p-2">
        <li
          className="font-medium ml-3 md:ml-7 mb-4 cursor-pointer hover:text-[#075b68]"
          onClick={() => setCart(listProduits)}
        >
          Tout
        </li>
        {categories.map((machine, index) => (
          <li
            className="font-medium ml-3 md:ml-7 mb-4 cursor-pointer  hover:text-[#075b68]"
            key={index}
            onClick={() => setCart(categorieOrdi(machine))}
          >
            {machine}
          </li>
        ))}
      </ul>
    </div>
  );
};
