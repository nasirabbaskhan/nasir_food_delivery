import { defineField, defineType } from "sanity";

export const Food = defineType({
  name: "food",
  title: "Food",
  type: "document",
  fields: [
    defineField({
      name: "restaurantname",
      title: "Restaurant Name",
      type: "string",
    }),

    defineField({
      name: "name",
      title: "Food Name",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
    }),
  ],
});
