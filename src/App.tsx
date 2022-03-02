import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import HomePage from './layouts/HomePage';
import ShoppingCart from './layouts/ShoppingCart';

const Container = styled.div``;

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="growsarisari-store" element={<HomePage />} />
        <Route path="growsarisari-store/cart" element={<ShoppingCart />} />
      </Routes>
    </Container>
  );
}

export default App;
