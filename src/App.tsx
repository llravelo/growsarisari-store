import { useState } from 'react';
import styled from 'styled-components';
import HomePage from './layouts/HomePage';
import ShoppingCart from './layouts/ShoppingCart';

const HOME_PAGE: string = 'home';
const CART_PAGE: string = 'cart';

const Container = styled.div``;

const Button = styled.div``;

function App() {
  const [page, setPage] = useState<string>(HOME_PAGE);

  return (
    <Container>
      <Button
        onClick={() => {
          if (page === HOME_PAGE) {
            setPage(CART_PAGE);
            return;
          }
          setPage(HOME_PAGE);
        }}
      >
        Click me!
      </Button>
      {page === HOME_PAGE && <HomePage />}
      {page === CART_PAGE && <ShoppingCart />}
    </Container>
  );
}

export default App;
