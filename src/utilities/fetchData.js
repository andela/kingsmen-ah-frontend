import axios from 'axios';

const fetchData = async (payload) => {
  try {
    const { url, method, options, datas } = payload;
    const data = await axios({
      method: method || 'get',
      url: `${window.location.origin}/api/v1/${url}`,
      headers: options,
      data: datas
    })
    return data;
  } catch (err) {
    return err;
  }

}
export default fetchData;
