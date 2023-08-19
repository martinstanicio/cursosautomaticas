import { defineDocumentType, makeSource } from "contentlayer/source-files";

import type { LocalDocument } from "contentlayer/source-files";
import sectionize from "@hbsnow/rehype-sectionize";

export const Course = defineDocumentType(() => ({
  name: "Course",
  filePathPattern: `**/*.(md|mdx)`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    datetime: { type: "date", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (course: LocalDocument) =>
        `/cursos/${course._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Course],
  disableImportAliasWarning: true,
  mdx: {
    rehypePlugins: [sectionize],
  },
});
