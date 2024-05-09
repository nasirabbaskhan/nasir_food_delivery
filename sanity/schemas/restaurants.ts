import { defineField, defineType } from "sanity";

export const Restaurants = defineType({
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Restaurant Name",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [
        { type: "block" }, //for ritch tex
      ],
    }),
    defineField({
      name: "slug",

      title: "Slug",

      type: "slug",

      options: {
        source: "name",

        maxLength: 200,

        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 20),
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),

    defineField({
      name: "country",
      title: "Country",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "catagory",
      title: "Food Catagory",
      type: "string",
    }),
  ],
});
