import { listProduits } from "../datas/Listproduits";
import { OrdiItem } from "./OrdiItem";

export const OrdiList = () => {
  const categories = listProduits.reduce(
    (arr, elem) =>
      arr.includes(elem.category) ? arr : arr.concat(elem.category),
    []
  );

  return (
    <div className="max-x-8xl mx-auto">
      <div className="grid grid-cols-3 gap-2">
        <OrdiItem />
      </div>
    </div>
  );
};
