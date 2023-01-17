import { defineField, defineType } from "sanity";

export default defineType({
  name: "city",
  title: "City",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "region",
      title: "Region",
      type: 'reference',
      to: {type: 'region'},
      options : {
        disableNew : true
      }

    })
  ],
});
