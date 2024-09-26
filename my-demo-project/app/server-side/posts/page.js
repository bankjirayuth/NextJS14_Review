async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error(error);
  }
}

export default async function page() {
  let posts = await fetchPosts();

  return (
    <div className="flex gap-2 flex-wrap">
      {posts.map((post) => (
        <a
          key={post.id}
          href={`/server-side/posts/${post.id}`}
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
