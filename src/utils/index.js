const proxyUrl = process.env.REACT_APP_PROXY || '0.0.0.0:8000';

const customFetch = (url, options = {}) => {
  const proxiedUrl = `${proxyUrl}${url}`;
  return fetch(proxiedUrl, options);
};

export default customFetch;