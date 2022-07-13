const Buttons = ({data, filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className='d-flex justify-content-center'>
        <button className='btn-primary text-white p-1 px-3 mx-5 fw-bold btn' onClick={() => setItem(data)}>
          All
        </button>
        {menuItems.map((val, id) => {
          return (
            <button className='btn-primary text-white p-1 px-2 mx-5 btn fw-bold' onClick={(e) => filterItem(e)} key={id}>
              {val}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Buttons;
