import './blog.css';
import { BlogArticle } from '../../components';
import { blogData } from '../../data/blogData';

const firstData = blogData[0];
const slicedData = blogData.slice(1);

const Blog = () => {
  return (
    <section className='blog' id='blog'>
      <div className='blog__header'>
        <h1 className='gradient-text '>A lot is happening, We are blogging about it.</h1>
      </div>

      <div className='blog__container'>
        <div className='blog__container--left'>
          <BlogArticle title={firstData.title} date={firstData.date} src={firstData.src} />
        </div>

        <div className='blog__container--right'>
          {slicedData.map((blog) => {
            return <BlogArticle key={blog.id} title={blog.title} date={blog.date} src={blog.src} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
