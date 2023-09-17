import sectionize from "@hbsnow/rehype-sectionize";

import { defineDocumentType, makeSource } from "contentlayer/source-files";
import type { LocalDocument } from "contentlayer/source-files";

export const Course = defineDocumentType(() => ({
  name: "Course",
  filePathPattern: `courses/**/*.(md|mdx)`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    datetime: { type: "date", required: true },
    price: { type: "number", required: true },
    images: { type: "list", required: true, of: { type: "string" } },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (course: LocalDocument) =>
        course._raw.sourceFileName.replace(/\.(md|mdx)$/, ""),
    },
    url: {
      type: "string",
      resolve: (course: LocalDocument) =>
        `/cursos/${course._raw.sourceFileName.replace(/\.(md|mdx)$/, "")}`,
    },
  },
}));

export const Testimony = defineDocumentType(() => ({
  name: "Testimony",
  filePathPattern: `testimonies/**/*.md`,
  fields: {
    name: { type: "string", required: true },
    job: { type: "string", required: true },
  },
}));

export const FAQ = defineDocumentType(() => ({
  name: "FAQ",
  filePathPattern: `faq/**/*.md`,
  fields: {
    title: { type: "string", required: true },
    isOpen: { type: "boolean", default: false },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Course, Testimony, FAQ],
  disableImportAliasWarning: true,
  mdx: {
    rehypePlugins: [sectionize],
  },
});
