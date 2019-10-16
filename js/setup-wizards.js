'use strict';

(function () {
  var WIZARD_NUMBER = 4;
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var similarWizardsSetup = document.querySelector('.setup-similar');

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

  var firstNames = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var lastNames = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  // generation random characteristics
  function generateWizards() {
    var wizards = [];
    for (var i = 0; i < WIZARD_NUMBER; i++) {
      var randomNameIndex = window.util.getRandomNumber(firstNames);
      var randomcoatColorsIndex = window.util.getRandomNumber(coatColorsCopy);
      var randomeyesColorsIndex = window.util.getRandomNumber(eyesColorsCopy);
      var wizard = {
        name: firstNames[randomNameIndex] + ' ' + lastNames[randomNameIndex],
        coatColors: coatColorsCopy[randomcoatColorsIndex],
        eyesColors: eyesColorsCopy[randomeyesColorsIndex]
      };

      // avoiding of duplication

      firstNames.splice(randomNameIndex, 1);
      lastNames.splice(randomNameIndex, 1);
      coatColorsCopy.splice(randomcoatColorsIndex, 1);
      eyesColorsCopy.splice(randomeyesColorsIndex, 1);

      // creating array of objects
      wizards[i] = wizard;
    }
    return wizards;
  }

  function showWizards(numberOfCopy, template, destination, arr) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < numberOfCopy; i++) {
      var newElement = template.cloneNode(true);
      fragment.appendChild(newElement);
      newElement.querySelector('.setup-similar-label').textContent = arr[i].name;
      newElement.querySelector('.wizard-coat').style.fill = arr[i].coatColors;
      newElement.querySelector('.wizard-eyes').style.fill = arr[i].eyesColors;
    }
    destination.appendChild(fragment);
  }

  var coatColorsCopy = window.util.getCopyArray(coatColors);
  var eyesColorsCopy = window.util.getCopyArray(eyesColors);
  var wizards = generateWizards();
  showWizards(WIZARD_NUMBER, similarWizardTemplate, similarListElement, wizards);
  // setup.classList.remove('hidden');
  similarWizardsSetup.classList.remove('hidden');
})();
