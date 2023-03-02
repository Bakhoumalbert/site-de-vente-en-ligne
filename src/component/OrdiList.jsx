
export const OrdiList = ({cart, setCart}) => {
  

  return (
    <div className="max-w-none mx-auto px-4 py-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {cart.map((cat, index) => (
          <div className="border shadow-lg rounded-lg duration-300" key={index}>
            <div className="aspect-square">
              <img
                className="w-full h-[200px] object-cover rounded-t-lg"
                src={cat.cover}
                alt="/"
              />
            </div>
            <ul className="ml-4">
              <li>{cat.category}</li>
              <li className="text-xl font-light text-blue-500">Nouveau</li>
              <li>
                <span>{cat.price}💸</span>
              </li>
            </ul>
            <button className="rounded-lg ">Acheter</button>
          </div>
        ))}
      </div>
    </div>
  );
};
