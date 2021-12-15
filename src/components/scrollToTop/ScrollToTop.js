import { BsArrowUp } from 'react-icons/bs';
const ScrollToTop = () => {
  return (
    <a className='fixed z-50 bottom-5 right-5 inline-block h-6 w-6 p-6 rounded-full bg-blue-600' href='#home'>
      <BsArrowUp className='absolute top-3 left-3' size={26} />
    </a>
  );
};

export default ScrollToTop;
