// import truncate from '../utils/truncate';
import Spinner from './Spinner';

const Card = ({ item, loading, error }) => {
  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;
  return (
    <>
      {!loading && !error && (
        <div className='container-fluid mt-5'>
          <div className='row justify-content-center'>
            {item?.map((val) => {
              return (
                <div className='card w-30' key={val.id}>
                  {/* <img src={val.image} className='card-img-top' alt='val' /> */}
                  <div className='card-body'>
                    <h5 className='card-title, mb-0'>{val.mission_name}</h5>
                    <p className='card-text'>
                      {val.launch_date_local}
                    </p>

                    <h6 className='card-subtitle text-muted'>Mission Success</h6>
                    <p className={`card-text ${val.launch_success ? 'text-success' : 'text-danger'}`}>{val.launch_success ? 'YES' : 'NO'}</p>
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
