'use strict';
var WIZARD_NUMBER = 4;

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var similarWizardsSetup = document.querySelector('.setup-similar');
var setup = document.querySelector('.setup');

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

var coatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

function getRandomNumber(arr) {
  return Math.floor(Math.random() * arr.length);
}

// generation random characteristics
function generateWizards() {
  var wizards = [];
  for (var i = 0; i < WIZARD_NUMBER; i++) {
    var randomNameIndex = getRandomNumber(firstNames);
    var randomCoatColorIndex = getRandomNumber(coatColorCopy);
    var randomEyesColorIndex = getRandomNumber(eyesColorCopy);
    var wizard = {
      name: firstNames[randomNameIndex] + ' ' + lastNames[randomNameIndex],
      coatColor: coatColorCopy[randomCoatColorIndex],
      eyesColor: eyesColorCopy[randomEyesColorIndex]
    };

    // avoiding of duplication

    firstNames.splice(randomNameIndex, 1);
    lastNames.splice(randomNameIndex, 1);
    coatColorCopy.splice(randomCoatColorIndex, 1);
    eyesColorCopy.splice(randomEyesColorIndex, 1);

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
    newElement.querySelector('.wizard-coat').style.fill = arr[i].coatColor;
    newElement.querySelector('.wizard-eyes').style.fill = arr[i].eyesColor;
  }
  destination.appendChild(fragment);
}

function getCopyArray(arr) {
  var copyArray = [];
  for (var i = 0; i < arr.length; i++) {
    copyArray[i] = arr[i];
  }
  return copyArray;
}

setup.classList.remove('hidden');
similarWizardsSetup.classList.remove('hidden');

var coatColorCopy = getCopyArray(coatColor);
var eyesColorCopy = getCopyArray(eyesColor);
var wizards = generateWizards();
showWizards(WIZARD_NUMBER, similarWizardTemplate, similarListElement, wizards);
