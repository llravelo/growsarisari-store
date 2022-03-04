export interface Product {
  id: number;
  display_name: string;
  barcode: number;
  price: number;
  brand: string;
  category: string;
}

export interface ProductContextType {
  getFilteredData: (
    searchKey?: string,
    brandFilters?: string[],
    categoryFilters?: string[]
  ) => Product[];
  getProductById: (productId: number) => Product | undefined;
}
