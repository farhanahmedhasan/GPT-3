import LazyLoad from 'react-lazyload';

import BlurImage from '../../assests/images/placeholder.jpg';
import './blogArticle.css';

const BlogArticle = (props) => {
  return (
    <article className='bg-quaternary h-full shadow-lg drop-shadow-lg'>
      <div className='bg-primary'>
        <LazyLoad offset={300} placeholder={<img src={BlurImage} alt='placeholder' />}>
          <img src={props.src} alt={props.title} />
        </LazyLoad>
      </div>

      <div className='py-8 px-4 '>
        <p className='text-xs mb-4'>{props.date}</p>
        <h3 className='mb-8'>{props.title}</h3>
        <p className='read text-xs cursor-pointer'>Read Full Article</p>
      </div>
    </article>
  );
};

export default BlogArticle;
