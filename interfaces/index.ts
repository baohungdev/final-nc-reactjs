// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
};

export type ProductGeneral = {
  name: string;
  productId: number;
  imgUrlMob: string;
  imgUrl: string;
  price: number;
  promotionPercent: number;
  finalPrice: number;
  shopId: number;
  shopName: string;
  percentStar: number;
  categoryId: string;
};

export type ProductList = {
  productList: [ProductGeneral];
};
