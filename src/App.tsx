import { useState } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import HomePage from './layouts/HomePage';
import ShoppingCart from './layouts/ShoppingCart';

export enum Pages {
  HOME_PAGE,
  CART_PAGE
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

function App() {
  const [page, setPage] = useState<Pages>(Pages.HOME_PAGE);

  return (
    <Container>
      <Navbar setPage={setPage} />
      <div className="h-full flex flex-col p-6 bg-gray-100">
        {page === Pages.HOME_PAGE && <HomePage />}
        {page === Pages.CART_PAGE && <ShoppingCart />}
      </div>
    </Container>
  );
}

export default App;
