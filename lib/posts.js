import fs from "fs";
import path from "path";
import matter from "gray-matter";

const root = path.join(process.cwd(), "pages", "blog");

export const getPostMeta = (slug) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(root, `${realSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
  const { data } = matter(fileContent);

  const meta = {
    ...data,
    slug: realSlug,
  };

  return meta;
};
export const getAllPostMeta = () => {
  const slugs = fs.readdirSync(root);
  const posts = slugs.map((slug) => getPostMeta(slug));
  return posts;
};
