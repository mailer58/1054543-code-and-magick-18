'use strict';

(function () {
  window.util = {
    debounce: function (callback, time) {
      var timeout;
      return function () {
        var args = arguments;
        if (timeout) {
          clearTimeout(timeout);
        }
        timeout = setTimeout(function () {
          timeout = null;
          callback.apply(null, args);
        }, time);
      };
    },
    getRandomNumber: function (arr) {
      return Math.floor(Math.random() * arr.length);
    },
    getCopyArray: function (arr) {
      var copyArray = [];
      for (var i = 0; i < arr.length; i++) {
        copyArray[i] = arr[i];
      }
      return copyArray;
    },
    getMaxElement: function (arr) {
      var maxElement = arr[0];
      for (var i = 0; i < arr.length; i++) {
        if (maxElement < arr[i]) {
          maxElement = arr[i];
        }
      }
      return maxElement;
    },
    getRandomColor: function (hue, saturationDiapason, lightness) {
      var randomColor = 'hsl(' + hue + ',' + Math.floor(Math.random() * saturationDiapason) + '%,' + lightness + '%)';
      return randomColor;
    }
  };
})();
