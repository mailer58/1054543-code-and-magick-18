'use strict';

(function () {
  var eyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var coatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  window.util = {
    initSetupCoords: {
      top: 80 + 'px',
      left: 50 + '%'
    },
    coatColors: coatColors,
    eyesColors: eyesColors,
    setup: document.querySelector('.setup'),
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
