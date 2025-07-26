import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { marked } from "marked";


const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `https://efficient-chickens-a0fa004e4e.strapiapp.com/api/blogs?filters[slug][$eq]=${slug}&populate=*`
        );
        const data = await res.json();
       
        setBlog(data.data[0]); 
      } catch (err) {
        console.error("Failed to fetch blog:", err);
      }
    };

    fetchBlog();
  }, [slug]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  // Safely access coverImage
  const imageUrl =
    blog.coverImage?.url && `https://efficient-chickens-a0fa004e4e.media.strapiapp.com/${blog.coverImage.url}`;

  return (
    <div className="max-w-3xl mx-auto py-24 px-6">
      {imageUrl && (
        <img src={imageUrl} alt={blog.title} className="rounded-lg mb-6 w-full" />
      )}
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p
        className="prose prose-lg text-lg text-gray-800 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: marked(blog.content) }}>
      </p>

      <a href="/blogs" className="block mt-8 text-orange-600">
        ← Back to Blogs
      </a>
    </div>
  );
};

export default BlogDetail;
