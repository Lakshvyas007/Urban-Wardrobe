export const filterData = (searchText, items) => {
    const filteredItems = items.filter((item) =>
      item?.category?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filteredItems;
  };