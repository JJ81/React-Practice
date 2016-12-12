var baseUrl = 'http://localhost:3000';

var service = {
  get : function (url) {
    //console.info('call url : ' + url);

    return fetch(baseUrl + url)
    .then(function (res) {
      //console.info(res);
      return res.json();
    });
  },
  post : function (url, data) {
    return fetch(baseUrl + url, {
      headers: {
        'Accept' : 'text/plain',
        'Content-Type' : 'application/json'
      },
      method : 'post',
      body : JSON.stringify(data)
    }).then(function (res) {
      return res;
    });
  }
};

export default service;
