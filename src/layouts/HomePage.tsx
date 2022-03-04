import { useContext, useEffect, useState } from 'react';
import Searchbar from '../components/Searchbar';
import Table from '../components/Table';
import ProductContext from '../context/ProductContext';
import { Product, ProductContextType } from '../types/Products';

function HomePage() {
  const [searchKey, setSearchKey] = useState<string>('');
  const [data, setData] = useState<Product[]>([]);
  const { getFilteredData } = useContext(ProductContext) as ProductContextType;

  const onSearch = (value: string) => {
    setData(getFilteredData(value));
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(data);
  }, [data]);

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
        <Table data={data} />
      </div>
    </>
  );
}

export default HomePage;
