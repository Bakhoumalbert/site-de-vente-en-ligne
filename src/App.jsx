import { useState } from "react";
import { Banner } from "./component/Banner";
import { Cart } from "./component/Cart";
import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
import { OrdiList } from "./component/OrdiList";
import { listProduits } from "./datas/Listproduits";

function App() {
  const [cart, setCart] = useState(listProduits);
  return (
    <div>
      <Header />
      <Banner />
      <div className="flex flex-row">
        <Cart cart={cart} setCart={setCart} />
        <OrdiList cart={cart} setCart={setCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
