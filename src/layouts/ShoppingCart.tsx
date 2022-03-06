import { useEffect, useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../api/cart/actions';
import Table, { editCell, tableData, editHeader } from '../components/Table';
import ProductContext from '../context/ProductContext';
import { ProductContextType } from '../types/Products';
import { useTypedSelector } from '../utils/useTypedSelector';

function ShoppingCart() {
  const dispatch = useDispatch();
  const cartItems = useTypedSelector((state) => state.cart.cartItems);
  const { getProductById } = useContext(ProductContext) as ProductContextType;
  const [data, setData] = useState<tableData>([]);
  const headers = ['name', 'unit price', 'quantity', 'price', editHeader];

  const onRemove = (productId: number) => {
    dispatch(deleteFromCart(productId));
  };

  useEffect(() => {
    const newTableData = cartItems.reduce<tableData>((arr, curr) => {
      const product = getProductById(curr.productId);
      if (!product) return arr;
      const totalPrice = (curr.quantity * product.price).toFixed(2);

      return [
        ...arr,
        [
          product.display_name,
          product.price,
          curr.quantity,
          totalPrice,
          { payload: curr.productId, text: 'Remove' } as editCell
        ]
      ];
    }, []);

    setData(newTableData);
  }, [cartItems]);

  return (
    <div className="pr-6 pl-6">
      <Table headers={headers} data={data} hasEdit editFn={onRemove} />
    </div>
  );
}

export default ShoppingCart;
