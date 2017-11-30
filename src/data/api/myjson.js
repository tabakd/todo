import cryptojs from 'crypto-js';

export const create = (data) => {
  const encryptedData = cryptojs.AES.encrypt(JSON.stringify(data), 'secret key 123')
  const body = JSON.stringify({data: encryptedData.toString()})
  return fetch('https://api.myjson.com/bins', {
      method: 'POST', body,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
  }).then(res => res.json()).then(res => {
      window.location.hash = res.uri.replace('https://api.myjson.com/bins/', '');
      return res;
    });
}

export const update = (data) => {
  const encryptedData = cryptojs.AES.encrypt(JSON.stringify(data), 'secret key 123');
  const body = JSON.stringify({data: encryptedData.toString()});
  return fetch('https://api.myjson.com/bins/' + window.location.hash.substring(1), {
      method: 'PUT', body,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
  }).then(res => res.json())
}

export const get = () => {
  return fetch('https://api.myjson.com/bins/' + window.location.hash.substring(1), {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
  })
  .then(res => res.json())
  .then(data => {
    console.log('Suhhh', data)
    if (data.bins) {
      return Promise.reject();
    }
    return data
  })
  .then(data => {
    const encryptedData = data.data;
    const bytes = cryptojs.AES.decrypt(encryptedData.toString(), 'secret key 123');
    const decryptedData = JSON.parse(bytes.toString(cryptojs.enc.Utf8));
    return decryptedData;
  })
}

