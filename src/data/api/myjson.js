


  export const create = (data) => {
    return fetch('https://api.myjson.com/bins', {
        method: 'POST', body: JSON.stringify(data),
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
    return fetch('https://api.myjson.com/bins/' + window.location.hash.substring(1), {
        method: 'PUT', body: JSON.stringify(data),
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
    }).then(res => res.json())
  }