import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/${id}`,
};

export default API_ENDPOINT;
