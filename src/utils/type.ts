import { Image } from "sanity";

export type CatagoryType = {
  image: Image;
  name: string;
  slug: Slug;
};
export type Slug = {
  current: string;
  _type: string;
};

export interface IDescription {
  _type: string;
  style: string;
  _key: string;

  markDefs: any[];
  children: any[];
}

export type RestaurantSingleType = {
  address: string;
  country: string;
  name: string;

  description: IDescription[];
  image: Image;

  catagory: string;
};
export type RestaurantType = {
  address: string;
  country: string;
  name: string;
  slug: Slug;
  description: IDescription[];
  image: Image;
  _id: string;
  catagory: string;
};

export type FoodItemsType = {
  _id: string;
  slug: Slug;
  image: Image;
  name: string;
  price: string;
  description: string;
  type: string;
  restaurantname: string;
};
