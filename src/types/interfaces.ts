export interface PriceType {
  value: number,
  symbol: string,
  isDefault: number
}

export interface ProductType {
  id: number;
  serialNumber: number;
  isNew: number;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: {
    start: string;
    end: string;
  };
  price: PriceType[];
  order: number;
  date: string;
}

export interface OrderType {
  title: string;
  date: string;
  description: string;
  readonly products: ProductType[];
}
