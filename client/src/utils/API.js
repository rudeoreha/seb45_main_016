import axios from 'axios';

export const login = async (data) => {
  try {
    const res = await axios({
      method: 'post',
      data,
      url: ``,
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const signUp = async (data) => {
  try {
    const res = await axios({
      method: 'post',
      data,
      url: ``,
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const API = async (url, metho) => {
  try {
    const response = await axios({
      method: metho,
      url: url,
      // {body형태 넣기},
      headers: {
        Authorization: localStorage.getItem('Token'),
        dataType: 'json',
      },
    });
    console.log(response.data);

    return response;
  } catch (e) {
    console.log(e);
  }
};
