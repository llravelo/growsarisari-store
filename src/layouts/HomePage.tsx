import { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Searchbar from '../components/Searchbar';
import Table, { editHeader, editCell, filterHeader, tableData } from '../components/Table';
import ProductContext from '../context/ProductContext';
import { addToCart } from '../api/cart/actions';
import { Product, ProductContextType } from '../types/Products';

function HomePage() {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState<string>('');
  const [productList, setProductList] = useState<Product[]>([]);
  const [data, setData] = useState<tableData>([]);
  const [isSearched, setIsSearched] = useState<boolean>(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const { getFilteredData, getBrands, getCategories } = useContext(
    ProductContext
  ) as ProductContextType;
  const headers = [
    'name',
    {
      text: 'brand',
      options: getBrands(),
      cb: (selected: string[]) => {
        setSelectedBrands(selected);
      }
    } as filterHeader,
    {
      text: 'category',
      options: getCategories(),
      cb: (selected: string[]) => {
        setSelectedCategories(selected);
      }
    } as filterHeader,
    'price',
    editHeader
  ];

  const onSearch = (value: string) => {
    setProductList(getFilteredData(value, selectedBrands, selectedCategories));
    setIsSearched(true);
  };

  const onAdd = (productId: number) => {
    dispatch(addToCart(productId));
  };

  useEffect(() => {
    const newTableData = productList.reduce<tableData>((arr, cur) => {
      return [
        ...arr,
        [
          cur.display_name,
          cur.brand,
          cur.category,
          cur.price,
          { payload: cur.id, text: 'Add to Cart' } as editCell
        ]
      ];
    }, []);
    setData(newTableData);
  }, [productList]);

  useEffect(() => {
    setProductList(getFilteredData(searchKey, selectedBrands, selectedCategories));
  }, [selectedBrands, selectedCategories]);

  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <Searchbar searchKey={searchKey} setSearchKey={setSearchKey} onSearch={onSearch} />
          </div>
        </div>
      </div>
      <div className="pr-6 pl-6">
        {isSearched && <Table headers={headers} data={data} hasEdit editFn={onAdd} />}
      </div>
    </>
  );
}

export default HomePage;
