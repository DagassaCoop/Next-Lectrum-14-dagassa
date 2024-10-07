"use client";

import { useEffect, useState } from "react";
import { fetchPosts } from "./actions/fetchPosts";
import { TPost } from "@/types/Post";

export default function Blog() {
  const [posts, setPosts] = useState<TPost[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const posts = await fetchPosts();

      if (!posts) return;

      setPosts(posts);
    };

    fetchData();
  }, []);

  return (
    <div>
      Blog
      {posts &&
        posts.map((p) => {
          return <div key={p.id}>Title: {p.title}</div>;
        })}
    </div>
  );
}
