import { createContext } from 'react';
import { ProductContextType } from '../types/Products';

const ProductContext = createContext<ProductContextType | null>(null);

export default ProductContext;
