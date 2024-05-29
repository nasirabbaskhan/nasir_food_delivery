import { type SchemaTypeDefinition } from "sanity";
import { Catagory } from "./schemas/catagory";
import { Restaurants } from "./schemas/restaurants";
import { Food } from "./schemas/food";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Catagory, Restaurants, Food],
};
