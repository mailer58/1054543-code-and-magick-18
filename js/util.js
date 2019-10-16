'use strict';

(function () {
  window.util = {
    getRandomNumber: function (arr) {
      return Math.floor(Math.random() * arr.length);
    },
    getCopyArray: function (arr) {
      var copyArray = [];
      for (var i = 0; i < arr.length; i++) {
        copyArray[i] = arr[i];
      }
      return copyArray;
    }
  };
})();
