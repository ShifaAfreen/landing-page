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
        {
          blogs.length === 0 ? (
      <div className="flex items-center gap-2 text-gray-500">
        <svg aria-hidden="true" role="status" className="inline w-8 h-8 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#3273a8"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
</svg>
        
      </div>
    ):

         ( blogs.map((blog) => {

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
        }))}
      </div>
    </div>
  );
};

export default Blog;
