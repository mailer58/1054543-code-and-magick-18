'use strict';
var WIZARD_NUMBER = 4;
<<<<<<< HEAD
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
=======

>>>>>>> e2f16060c658a1d0ac4637a0bbcc75493472265a
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var similarWizardsSetup = document.querySelector('.setup-similar');
var setup = document.querySelector('.setup');
<<<<<<< HEAD

var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = document.querySelector('.setup-user-name');
var saveButton = document.querySelector('.setup-submit');
var wizardForm = document.querySelector('.setup-wizard-form');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var coatColorInput = document.querySelector('.setup-wizard-form').elements['coat-color'];
var eyesColorInput = document.querySelector('.setup-wizard-form').elements['eyes-color'];
var fireballColorInput = document.querySelector('.setup-wizard-form').elements['fireball-color'];
var coatIndex = 0;
var eyesIndex = 0;
var fireballIndex = 0;
=======
>>>>>>> e2f16060c658a1d0ac4637a0bbcc75493472265a

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

<<<<<<< HEAD
var fireballColor = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

=======
>>>>>>> e2f16060c658a1d0ac4637a0bbcc75493472265a
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
<<<<<<< HEAD
}

function onElementClick(index, arr, element, input, action) {
  index++;
  if (action === 'fill') {
    if (index < arr.length) {
      element.style.fill = arr[index];
      input.value = arr[index];
    } else {
      element.style.fill = arr[0];
      input.value = arr[0];
      index = 0;
    }
  } else if (action === 'background-color') {
    if (index < arr.length) {
      element.style.background = arr[index];
      input.value = arr[index];
    } else {
      element.style.background = arr[0];
      input.value = arr[0];
      index = 0;
    }
  }
  return index;
}

function onCoatClick() {
  coatIndex = onElementClick(coatIndex, coatColor, wizardCoat, coatColorInput, 'fill');
}

function onEyesClick() {
  eyesIndex = onElementClick(eyesIndex, eyesColor, wizardEyes, eyesColorInput, 'fill');
}

function onFireballClick() {
  fireballIndex = onElementClick(fireballIndex, fireballColor, wizardFireball, fireballColorInput, 'background-color');
}

function onSaveButtonClick() {
  wizardForm.submit();
}

function onSaveButtonPress(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    wizardForm.submit();
  }
}

function onPopupEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE && event.target.className !== 'setup-user-name') {
    closePopup();
  }
}

function onCloseButtonClick() {
  closePopup();
}

function onCloseButtonKeydown() {
  closePopup();
}

function openPopup() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  saveButton.addEventListener('click', onSaveButtonClick);
  saveButton.addEventListener('keydown', onSaveButtonPress);
  wizardCoat.addEventListener('click', onCoatClick);
  wizardEyes.addEventListener('click', onEyesClick);
  wizardFireball.addEventListener('click', onFireballClick);
  setupClose.addEventListener('click', onCloseButtonClick);
  setupClose.addEventListener('keydown', onCloseButtonKeydown);
}

function closePopup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  saveButton.removeEventListener('click', onSaveButtonClick);
  saveButton.removeEventListener('keydown', onSaveButtonPress);
  wizardCoat.removeEventListener('click', onCoatClick);
  wizardEyes.removeEventListener('click', onEyesClick);
  wizardFireball.removeEventListener('click', onFireballClick);
  setupClose.removeEventListener('click', onCloseButtonClick);
  setupClose.removeEventListener('keydown', onCloseButtonKeydown);
}

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

// form validation
userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

// setup.classList.remove('hidden');
=======
}

setup.classList.remove('hidden');
>>>>>>> e2f16060c658a1d0ac4637a0bbcc75493472265a
similarWizardsSetup.classList.remove('hidden');

var coatColorCopy = getCopyArray(coatColor);
var eyesColorCopy = getCopyArray(eyesColor);
var wizards = generateWizards();
showWizards(WIZARD_NUMBER, similarWizardTemplate, similarListElement, wizards);
