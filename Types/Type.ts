type Blog = {
  isFeatured: boolean;
  image: string;
  excerpt: string;
  title: string;
  date: string;
};
export type Post = Blog & {
  content: string;
  slug:string
};
export interface AllPosts {
  posts: Post[];
}

export interface SinglePost {
  post: Post;
}
export type Status = "Pending" | "Error" | "Succuss" | ''
