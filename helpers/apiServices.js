import axios from 'axios';
import { getConfig } from '../config/config';

const { SERVER_URL, LOCAL_SERVER_URL } = getConfig();

const getQueryParams = queryParams =>
  Object.keys(queryParams).reduce(
    (acc, item, id) => acc + (id ? '&' : '') + item + '=' + queryParams[item],
    '?',
  );

export const getData = async (collection, queryParams, dev = false) => {
  let params = '';
  if (queryParams) {
    params = getQueryParams(queryParams);
  }
  try {
    const { data } = await axios.get(
      `${dev ? LOCAL_SERVER_URL : SERVER_URL}/api/${collection}${params}`,
    );
    return data.data;
  } catch (error) {
    console.log('ERROR', error.message);
    return [];
  }
};

export const getStrapiMedia = (media, dev = false) => {
  const { url } = media.data.attributes;
  const imageUrl = `${dev ? LOCAL_SERVER_URL : SERVER_URL}${url}`;
  console.log('imageUrl', imageUrl);
  return imageUrl;
};
