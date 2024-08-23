import axios from 'axios';

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data
});

export const fetchData = () => {
  return (dispatch) => {
    axios.get('/assets/data.json')
      .then(response => {
        const transformedData = transformData(response.data);
        dispatch(fetchDataSuccess(transformedData));
      })
      .catch(error => {
        console.error('Error fetching data', error);
      });
  };
};

const transformData = (data) => {
  const headers = data.table_headers.map(header => header.name);
  return data.table_data.map(row => {
    let rowData = {};
    row.forEach((value, index) => {
      rowData[headers[index]] = value;
    });
    return rowData;
  });
};
