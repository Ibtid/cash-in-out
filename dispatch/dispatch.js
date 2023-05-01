import actions from './actions';
import axios from 'axios';
// const baseUrl = 'https://secret-dawn-63355.herokuapp.com';
// const baseUrl = 'http://192.168.0.109:7000';
export const baseUrl = "https://mbra.checkmehere.xyz"
// const baseUrl = 'http://localhost:5000';

const dispatch = async (action, headerParams = {}, body = {}, token = '') => {
  try {
    let axiosOptions = {};
    let response = {};
    switch (action) {
        case actions.agentLogin:
            axiosOptions = getAxiosOptions("POST", `${baseUrl}/agent`, body, token)
            response = await axios(axiosOptions)
            return response.data
          case actions.getAgent:
            axiosOptions = getAxiosOptions("GET",`${baseUrl}/agent`,body, token)
            response = await axios(axiosOptions)
            return response.data
          case actions.getBillPaymentEntity:
            axiosOptions = getAxiosOptions("GET",`${baseUrl}/billpaymententity/getOne`, body, token)
            response = await axios(axiosOptions)
            return response.data
        default:
          response = {error: {message: "Invalid Command"}}
          return response
    }
  } catch (err) {
    console.log(err);
    return err.response.data
  }
};

const getAxiosOptions = (method, url, body, token) => {
  const headers = {
    'x-auth-token': token,
  };
  switch (method) {
    case 'GET':
      return {
        method: 'GET',
        url,
        headers,
      };

    case 'POST':
      return {
        method: 'POST',
        url,
        headers,
        data: body,
      };

    case 'PUT':
      return {
        method: 'PUT',
        url,
        headers,
        data: body,
      };

    case 'DELETE':
      return {
        method: 'DELETE',
        url,
        headers,
      };
    default:
      return null
  }
};

export default dispatch;