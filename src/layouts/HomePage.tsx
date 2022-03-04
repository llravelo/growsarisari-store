import { useState } from 'react';
import Searchbar from '../components/Searchbar';
import Table from '../components/Table';

function HomePage() {
  const [searchKey, setSearchKey] = useState<string>('');

  const onSearch = (value: string) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

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
        <Table />
      </div>
    </>
  );
}

export default HomePage;
