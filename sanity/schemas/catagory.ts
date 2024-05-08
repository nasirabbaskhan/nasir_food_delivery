import { defineField, defineType } from "sanity";

export const Catagory = defineType({
  name: "catagory",
  title: "Catagory",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
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
  ],
});
