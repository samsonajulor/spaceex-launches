// import truncate from '../utils/truncate';
import Spinner from './Spinner';

const Card = ({ item, loading, error }) => {
  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;
  return (
    <>
      {!loading && !error && (
        <div className='container-fluid'>
          <div className='row justify-content-center'>
            {item?.map((val) => {
              return (
                <div className='flex col-md-4 col-sm-6 my-3 py-3 border-0' key={val.id}>
                  <div className='card-img-top text-center'>
                    <img src={val.image} alt={val.name} className='img-responsive' />
                  </div>
                  <div className='card-body'>
                    <div className='card-title  fs-10'>{val.name}</div>
                    <div className='card-title fw-bold fs-8'>{val.species}</div>
                    <div className='card-title text-info fs-10'>{val.status}</div>
                    {/* <div className='card-text fw-light fs-10'>{truncate(val.desc, 108)}</div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
