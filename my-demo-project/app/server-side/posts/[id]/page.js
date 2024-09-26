async function fetchPost(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post = await response.json();
    return post;
  } catch (error) {
    console.error(error);
  }
}

export default async function page({ params }) {
  const post = await fetchPost(params.id);

  return (
    <div>
      <div className="block p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {post.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">
          Post by: {post.userId}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {post.body}
        </p>
      </div>
    </div>
  );
}
