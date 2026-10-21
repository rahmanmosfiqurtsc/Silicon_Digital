import { useState } from "react";
import { Bookmark } from "lucide-react";
import "../../css/Blogs.css";
import Imgg from "../../assets/Blog/watch.png";
import Imgg1 from "../../assets/Blog/astro.png";
import Imgg2 from "../../assets/Blog/laptop.png";
import Imgg3 from "../../assets/Blog/image-1.png";
import Imgg4 from "../../assets/Blog/image-2.png";
import Imgg5 from "../../assets/Blog/image-3.png";

const blogPosts = [
  {
    id: 1,
    image: Imgg,
    category: "Digital",
    date: "12 hours ago",
    title: "A study on smartwatch design qualities and people’s preferences",
    author: "Jerome Bell",
    role: "Marketing Specialist",
    avatar: Imgg3,
    layout: "featured",
  },
  {
    id: 2,
    image: Imgg1,
    category: "Design",
    date: "1 day ago",
    title: "Brand analysis: second step to the brand identity",
    author: "Anette Black",
    role: "Product Manager",
    avatar: Imgg4,
    layout: "horizontal",
  },
  {
    id: 3,
    image: Imgg2,
    category: "Tips & Advice",
    date: "May 24, 2021",
    title: "How to check the website before releasing it?",
    author: "Marvin McKinney",
    role: "Senior UI/UX Designer",
    avatar: Imgg5,
    layout: "horizontal",
  },
];

function BlogCard({ post, saved, onToggleSave }) {
  return (
    <article className={`blog-card blog-card--${post.layout}`}>
      <div className="blog-image-wrap">
        <img
          className="blog-image"
          src={post.image}
          alt={post.title}
          loading="lazy"
        />

        <button
          type="button"
          className={`blog-bookmark ${saved ? "is-saved" : ""}`}
          onClick={() => onToggleSave(post.id)}
          aria-label={saved ? "Remove saved post" : "Save post"}
          aria-pressed={saved}
        >
          <Bookmark size={17} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="blog-content">
        <div className="blog-meta">
          <span className="blog-category">{post.category}</span>
          <span className="blog-date">{post.date}</span>
        </div>

        <h3 className="blog-title">{post.title}</h3>

        <div className="blog-author">
          <img src={post.avatar} alt="" className="author-avatar" />
          <div className="author-details">
            <h4>{post.author}</h4>
            <p>{post.role}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function BlogSection() {
  const [savedPosts, setSavedPosts] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const extraPosts = [
    {
      id: 4,
      image: Imgg,
      category: "Digital",
      date: "12 hours ago",
      title: "A study on smartwatch design qualities and people’s preferences",
      author: "Jerome Bell",
      role: "Marketing Specialist",
      avatar: Imgg3,
      layout: "featured",
    },
    {
      id: 5,
      image: Imgg1,
      category: "Design",
      date: "1 day ago",
      title: "Brand analysis: second step to the brand identity",
      author: "Anette Black",
      role: "Product Manager",
      avatar: Imgg4,
      layout: "horizontal",
    },
  ];

  const toggleSave = (id) => {
    setSavedPosts((current) =>
      current.includes(id)
        ? current.filter((savedId) => savedId !== id)
        : [...current, id],
    );
  };

  const posts = showMore ? [...blogPosts, ...extraPosts] : blogPosts;

  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        <h2 className="blog-heading">Latest From Our Blog</h2>

        <div className="blog-grid">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              saved={savedPosts.includes(post.id)}
              onToggleSave={toggleSave}
            />
          ))}
        </div>

        <div className="blog-more">
          <button
            type="button"
            className="blog-more-button"
            onClick={() => setShowMore((value) => !value)}
          >
            {showMore ? "Show fewer posts" : "More blog posts"}
          </button>
        </div>
      </div>
    </section>
  );
}
