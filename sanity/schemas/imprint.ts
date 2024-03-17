import { defineField, defineType } from "sanity";
import { DocumentPdfIcon} from "@sanity/icons";

export default defineType({
  name: "imprint",
  title: "Imprint",
  type: "document",
  icon: DocumentPdfIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "address1",
      title: "Address Line 1",
      type: "string",
    }),
    defineField({
      name: "address2",
      title: "Address Line 2",
      type: "string",
    }),
    defineField({
      name: "address3",
      title: "Address Line 3",
      type: "string",
    }),
    defineField({
      name: "telephone",
      title: "Telephone",
      type: "string",
    }),

    defineField({
      name: "website",
      title: "Website",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "vatId",
      title: "VAT ID",
      type: "string",
    }),
    defineField({
      name: "telephoneHours",
      title: "Telephone Hours",
      type: "string",
    }),

    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
  ],
});
