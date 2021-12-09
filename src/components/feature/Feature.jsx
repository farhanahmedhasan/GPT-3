import './feature.css';

const Feature = ({ title, details, classTitileBox, classDescBox }) => {
  return (
    <>
      <div className={classTitileBox}>
        <div className='line'></div>
        <h3>{title}</h3>
      </div>

      <div className={classDescBox}>
        <p>{details}</p>
      </div>
    </>
  );
};

export default Feature;
