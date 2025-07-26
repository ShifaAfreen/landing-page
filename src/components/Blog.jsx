import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { marked } from 'marked';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://efficient-chickens-a0fa004e4e.strapiapp.com/api/blogs?populate=*");
        const data = await res.json();
        setBlogs(data.data);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      }
    };

    fetchBlogs();
  }, []);
  

  return (
    <div>
      <div className="bg-black overflow-hidden relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 lg:py-32">
          <div className="text-center">
            <h2 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Blogs & Insights
            </h2>
            <p className="text-center text-gray-100 text-lg p-5">
              Explore the expert insights, industry trends, blogs on technology and business solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-self-center px-10 py-16 md:py-20 lg:py-32">
        {blogs.map((blog) => {

        const coverImage = blog?.coverImage?.url;
          const imageUrl = coverImage ? `https://efficient-chickens-a0fa004e4e.media.strapiapp.com/${coverImage}` : null;

          return (<article key={blog.id} className="bg-white max-w-sm border border-gray-200 rounded-lg shadow-sm p-4 sm:p-6">
            <img src={imageUrl} alt="thumbnail" className="rounded-t-lg " />

            <h5 className="text-xl sm:text-2xl font-bold tracking-tight my-4">
              {blog.title}
            </h5>

            <p
              className="mb-4 font-normal text-gray-800 line-clamp-3"
              dangerouslySetInnerHTML={{ __html: marked(blog.content) }}
            ></p>

            <Link to={`/blogs/${blog.slug}`} className="px-3 py-2 text-sm font-medium text-white bg-orange-600 rounded-lg">
              Read more
            </Link>
          </article>);
        })}
      </div>
    </div>
  );
};

export default Blog;
