import { CollectionConfig } from "payload/types";
// @ts-ignore
import { parent, breadcrumbs } from "@payloadcms/plugin-nested-docs/fields";
import { createParentField } from "@payloadcms/plugin-nested-docs/fields";


console.log("parent is " , parent);


export const Menus: CollectionConfig = {
  slug: "menus",
  fields: [
    parent.createParentField(
      // First argument is equal to the slug of the collection
      // that the field references
      "pages",

      // Second argument is equal to field overrides that you specify,
      // which will be merged into the base parent field config
      {
        admin: {
          position: "sidebar",
        },
        // Note: if you override the `filterOptions` of the `parent` field,
        // be sure to continue to prevent the document from referencing itself as the parent like this:
        // filterOptions: ({ id }) => ({ id: {not_equals: id }})`
      }
    ),
    breadcrumbs.createBreadcrumbsField(
      // First argument is equal to the slug of the collection
      // that the field references
      "pages",

      // Argument equal to field overrides that you specify,
      // which will be merged into the base `breadcrumbs` field config
      {
        label: "Page Breadcrumbs",
      }
    ),
  ],
};