"use client";

import { useState, useEffect } from "react";

export default function page() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = await response.json();
        setPosts(posts);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="flex gap-2 flex-wrap">
      {posts.map((post) => (
        <a
          key={post.id}
          href={`/client-side/posts/${post.id}`}
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {post.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {post.body}
          </p>
        </a>
      ))}
    </div>
  );
}
