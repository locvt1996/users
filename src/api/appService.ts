import Axios from 'axios';

const AppService = Axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  params: {},
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'false',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

export default AppService;
