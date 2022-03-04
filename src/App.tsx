import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductContext from './context/ProductContext';
import ProductState from './context/ProductState';
import HomePage from './layouts/HomePage';
import ShoppingCart from './layouts/ShoppingCart';

export enum Pages {
  HOME_PAGE,
  CART_PAGE
}

function App() {
  const [page, setPage] = useState<Pages>(Pages.HOME_PAGE);

  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar setPage={setPage} />
      <ProductContext.Provider value={ProductState}>
        <div className="h-full flex flex-col p-6 bg-gray-100">
          {page === Pages.HOME_PAGE && <HomePage />}
          {page === Pages.CART_PAGE && <ShoppingCart />}
        </div>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
