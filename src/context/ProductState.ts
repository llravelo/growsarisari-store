/* eslint-disable no-console */
import rawData from '../data/Products.json';
import { Product } from '../types/Products';

const getFilteredData = (
  searchKey?: string,
  brandFilters?: string[],
  categoryFilters?: string[]
): Product[] => {
  function checkSearchKey(data: Product, str: string = '') {
    const key = str.toLowerCase();
    return (
      data.display_name.toLowerCase().includes(key) ||
      data.brand.toLowerCase().includes(key) ||
      data.category.toLowerCase().includes(key)
    );
  }
  function checkArr(data: Product, arr?: string[]) {
    if (!arr) return true;
    return arr.includes(data.brand);
  }

  return rawData.filter((data) => {
    return (
      checkSearchKey(data, searchKey) &&
      checkArr(data, brandFilters) &&
      checkArr(data, categoryFilters)
    );
  });
};

const getProductById = (productId: number): Product | undefined => {
  return rawData.find((data) => data.id === productId);
};

export default {
  getFilteredData,
  getProductById
};
