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
  function checkBrand(data: Product, arr?: string[]) {
    if (!arr || arr.length <= 0) return true;
    return arr.includes(data.brand);
  }

  function checkCategory(data: Product, arr?: string[]) {
    if (!arr || arr.length <= 0) return true;
    return arr.includes(data.category);
  }

  return rawData.filter((data) => {
    return (
      checkSearchKey(data, searchKey) &&
      checkBrand(data, brandFilters) &&
      checkCategory(data, categoryFilters)
    );
  });
};

const getProductById = (productId: number): Product | undefined => {
  return rawData.find((data) => data.id === productId);
};

const getBrands = (): string[] => {
  const brandArr: string[] = [];
  rawData.forEach((data) => {
    if (!brandArr.includes(data.brand)) brandArr.push(data.brand);
  });
  return brandArr;
};

const getCategories = (): string[] => {
  const categoryArr: string[] = [];
  rawData.forEach((data) => {
    if (!categoryArr.includes(data.category)) categoryArr.push(data.category);
  });
  return categoryArr;
};

export default {
  getFilteredData,
  getProductById,
  getBrands,
  getCategories
};
