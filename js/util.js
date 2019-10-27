'use strict';

(function () {
  var DEBOUNCE_INTERVAL = 500;
  window.util = {
    debounce: function (func) {
      var lastTimeout = null;
      return function () {
        var parameters = arguments;
        if (lastTimeout) {
          window.clearTimeout(lastTimeout);
        }
        lastTimeout = window.setTimeout(function () {
          func.apply(null, parameters);
        }, DEBOUNCE_INTERVAL);
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
