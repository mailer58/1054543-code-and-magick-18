'use strict';
var WIZARD_NUMBER = 4;
var userDialog = document.querySelector('.setup');
var wizards = [];
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');


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
]

function random(arr) {
  return Math.floor(Math.random() * arr.length);
}

function addVariety(element, className, source) {
element.querySelector(className).style.fill = source;
}

function getnewElements(numberOfCopy, template, destination) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < numberOfCopy; i++) {
    var newElement = template.cloneNode(true);
    fragment.appendChild(newElement);
    newElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    addVariety(newElement, '.wizard-coat', wizards[i].coatColor);
    addVariety(newElement, '.wizard-eyes', wizards[i].eyesColor);
  }
  destination.appendChild(fragment);
}

userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

//generation random characteristics
for (var i = 0; i < WIZARD_NUMBER; i++) {
  var randomNameIndex = random(firstNames);
  var randomCoatColorIndex = random(coatColor);
  var randomEyesColorIndex = random(eyesColor);
  var wizard = {
    name: firstNames[randomNameIndex] + ' ' + lastNames[randomNameIndex],
    coatColor: coatColor[randomCoatColorIndex],
    eyesColor: eyesColor[randomEyesColorIndex]
  };

  //avoiding of duplication
  firstNames.splice(randomNameIndex, 1);
  lastNames.splice(randomNameIndex, 1);
  coatColor.splice(randomCoatColorIndex, 1);
  eyesColor.splice(randomEyesColorIndex, 1);

  // creating array of objects
  wizards.push(wizard);
}

getnewElements (WIZARD_NUMBER, similarWizardTemplate, similarListElement);
