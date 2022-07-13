import Spinner from './Spinner';
import { groupBy } from '../utils/groupBy';

const Card = ({ item, loading, error }) => {
  const grouped = groupBy(item, (data) => data.launch_year);
  const groupItems = [...new Set(item?.map((val) => val.launch_year))];

  console.log(groupItems, 'groupItems')
  console.log(grouped.get('2008'), 'grouped');

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;
  return (
    <>
      {!loading && !error && (
        <div className='container-fluid mt-5'>
          <div className='row justify-content-center'>
            {groupItems.map((val, id) => {
              return (
                <div className='mt=10 card-body'>
                  <div className='' key={id}>
                    <div className='card'>
                      <h5 className='p-3 card-title'>{val}</h5>
                      <p className='card-text'>
                        {grouped.get(val)?.map((item, index) => {
                          return (
                            <div className='card w-30' key={item.id}>
                              <div className='card-body'>
                                <h5 className='card-title, mb-0'>{item.mission_name}</h5>
                                <p className='card-text'>{item.launch_date_local}</p>

                                <h6 className='card-subtitle text-muted'>Mission Success</h6>
                                <p className={`card-text ${item.launch_success ? 'text-success' : 'text-danger'}`}>
                                  {item.launch_success ? 'YES' : 'NO'}
                                </p>
                                <h6 className='card-subtitle text-muted'>Reason</h6>
                                <p className='card-text text-primary'>{item.details || 'Unknown'}</p>
                              </div>
                            </div>
                          );
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
