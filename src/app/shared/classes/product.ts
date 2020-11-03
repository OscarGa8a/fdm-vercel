// Product Colors
export type ProductColor = 'white' | 'black' | 'red' | 'green' | 'purple' | 'yellow' | 'blue' | 'gray' | 'orange' | 'pink';

// Product Size
export type ProductSize = 'M' | 'L' | 'XL';

// Product Tag
export type ProductTags = 'nike' | 'puma' | 'lifestyle' | 'caprese';

// Product
export interface Product {
  id?: number;
  name?: string;
  price?: number;
  salePrice?: number;
  discount?: number;
  pictures?: string;
  pictures2?: string;
  shortDetails?: string;
  description?: string;
  stock?: number;
  new?: boolean;
  multicapa?: string;
  multicolor?: string;
  sale?: boolean;
  category?: string;
  state?: string;
  colors?: ProductColor[];
  size?: ProductSize[];
  tags?: ProductTags[];
  variants?: any[];
}

// Color Filter
export interface ColorFilter {
  color?: ProductColor;
}

// Tag Filter
export interface TagFilter {
  tag?: ProductTags;
}
