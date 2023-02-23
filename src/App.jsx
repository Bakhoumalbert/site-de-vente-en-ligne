import { Banner } from "./component/Banner";
import { Cart } from "./component/Cart";
import { Footer } from "./component/Footer";
import { OrdiList } from "./component/OrdiList";

function App() {
  return (
    <div>
      <div className="sticky top-0">
        <Banner />
      </div>
      <div className="max-x-7xl mx-auto flex">
        <div className="block w-1/4 h-full bg-[#44b8e3] text-white sticky top-28 self-start shadow">
          <Cart />
        </div>
        <div className="w-3/4 border-l bg-slate-100 border-black">
          <OrdiList />
        </div>
      </div>
      <div className="bg-white text-black p-32 border-t-4 border-black flex flex-col justify-start items-center font-medium">
        <Footer />
      </div>
    </div>
  );
}

export default App;
