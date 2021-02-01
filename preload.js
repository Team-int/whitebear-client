window.addEventListener('load', () => {
  window.sessionId = Math.floor(Math.random() * 100000);
  const axios = require('axios').default;
  document.querySelector('#msg').addEventListener('submit', e => {
    e.preventDefault();
    if (document.querySelector('#msgbox').value == undefined) return;
    let element1 = document.createElement('div');
    element1.setAttribute('class', 'history');
    element1.innerHTML = `<div class="empty"></div><div class="box">${document.querySelector('#msgbox').value}</div>`;
    document.querySelector('#history-container').appendChild(element1);
    let q = document.querySelector('#msgbox').value;
    document.querySelector('#msgbox').value = '';
    axios.get(`https://whitebear-client-backend.mswgen.repl.co/?userid=${sessionId}&text=${q}`).then(resp => {
      let element2 = document.createElement('div');
      element2.setAttribute('class', 'history2');
      element2.innerHTML = `<div class="box">${resp.data}</div><div class="empty"></div>`;
      document.querySelector('#history-container').appendChild(element2);
    });
  });
});