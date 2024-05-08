import { Image } from "sanity";

export type Catagory = {
  image: Image;
  name: string;
  slug: Slug;
};
export type Slug = {
  current: string;
  _type: string;
};
