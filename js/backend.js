'use strict';

(function () {
  var setup = document.querySelector('.setup');

  window.backend = {
    load: function load(onLoad, onError) {
      var URL = 'https://js.dump.academy/code-and-magick/data';
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.addEventListener('progress', function () {
        var wizardsHeader = document.querySelector('.setup-similar-title');
        var div = document.createElement('div');
        div.className = 'loading';
        div.style.textAlign = 'center';
        wizardsHeader.after(div);
        div.textContent = 'Идет загрузка';
      });
      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          // remove loading message:
          var loadMessage = document.getElementsByClassName('loading')[0];
          loadMessage.remove();
          onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      xhr.timeout = 15000; // 10s

      xhr.open('GET', URL);
      xhr.send();
    },
    save: function save(data, onLoad, onError) {
      var URL = 'https://js.dump.academy/code-and-magick';
      var xhr = new XMLHttpRequest();
      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          setup.classList.add('hidden');
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      xhr.timeout = 15000; // 10s
      var sendData = new FormData(data);
      xhr.open('POST', URL);
      xhr.send(sendData);
    }

  };

  /*
function save () {
var URL = 'https://js.dump.academy/code-and-magick';
  window.save = function (data, onSuccess) {
    var xhr = new XMLHttpRequest();
   xhr.responseType = 'json';

   xhr.addEventListener('load', function () {
     onSuccess(xhr.response);
   });

   xhr.open('POST', URL);
   xhr.send(data);
   };

}
*/


})();
