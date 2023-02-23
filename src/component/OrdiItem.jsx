import { listProduits } from "../datas/Listproduits";

export const OrdiItem = () => {
  return listProduits.map(({ id, cover, price, category }) => (
    <div className="border-b border-t border-gray-800 text-center mt-2">
      <ul className="" key={id}>
        <div className="aspect-square">
          <img
            className="w-full h-full border border-blue-500 rounded-2xl "
            src={cover}
            alt="/"
          />
        </div>
        <li>{category}</li>
        <li className="text-xl font-light text-blue-500">Nouveau</li>
        <li>
          <span>{price}💸</span>
        </li>
        <li className="flex justify-center space-x-1 mt-2">
          <span className="rounded-full bg-blue-500 w-4 h-4 shadow-inner"></span>
          <span className="rounded-full bg-gray-500 w-4 h-4 shadow-inner"></span>
          <span className="rounded-full bg-red-500 w-4 h-4 shadow-inner"></span>
          <span className="rounded-full bg-yellow-500 w-4 h-4 shadow-inner"></span>
        </li>
      </ul>
    </div>
  ));
};
