import axios from 'axios';
import get from 'lodash.get';

const baseURL = 'http://127.0.0.1:1337/api/v1/';

const request = async (options) => {
  const rawResult = await axios({
    method: 'get',
    baseURL,
    ...options
  });

  const status = get(rawResult, 'data.status', '');

  return status === 'success' ? get(rawResult, 'data.data', '') : '';
};

export default request;
