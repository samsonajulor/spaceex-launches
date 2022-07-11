const paginate = (item) => {
  const itemsPerPage = 4;
  const numberOfPages = Math.ceil(item.length / itemsPerPage);

  const newItem = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return item.slice(start, start + itemsPerPage);
  });

  return newItem;
};

export default paginate;
