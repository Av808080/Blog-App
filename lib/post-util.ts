import matter from "gray-matter";
import fs from "fs";
import path from "path";

export const getPostdata = (fileName: string) => {
  const filePath = path.join(process.cwd(), "posts", fileName);
  const fileContent = fs.readFileSync(filePath);
  const { content, data } = matter(fileContent);
  const slug = filePath.replace(`\.md\$`, "");
  return {
    content,
    slug,
    ...data,
  };
};

export const postFiles = () => {
  const filePath = path.join(process.cwd(), "posts");
  const postFiles = fs.readdirSync(filePath);
  return postFiles;
};

export const getAllPosts = () => {
  const _postFiles = postFiles();
  const allposts = _postFiles.map((postFile) => getPostdata(postFile));
  allposts.sort((postA: any, postB: any) => (postA.date > postB.date ? -1 : 1));
  return allposts;
};

export const getfeturedPosts = () => {
  const allPosts = getAllPosts();
  const feturedPosts = allPosts.filter((post: any) => post.isFeatured);
  return feturedPosts;
};
