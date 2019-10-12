'use strict';
(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var wizardForm = document.querySelector('.setup-wizard-form');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var userNameInput = document.querySelector('.setup-user-name');
  var saveButton = document.querySelector('.setup-submit');
  var coatIndex = 0;
  var eyesIndex = 0;
  var fireballIndex = 0;
  var coatColorsInput = wizardForm.elements['coat-color'];
  var eyesColorsInput = wizardForm.elements['eyes-color'];
  var fireballColorsInput = wizardForm.elements['fireball-color'];
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  var fireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  function onSaveButtonClick() {
    wizardForm.submit();
  }

  function onSaveButtonPress(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      wizardForm.submit();
    }
  }

  function onPopupEscPress(evt) {
    if (evt.keyCode === ESC_KEYCODE && evt.target.className !== 'setup-user-name') {
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
    window.util.setup.classList.remove('hidden');
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
    window.util.setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    saveButton.removeEventListener('click', onSaveButtonClick);
    saveButton.removeEventListener('keydown', onSaveButtonPress);
    wizardCoat.removeEventListener('click', onCoatClick);
    wizardEyes.removeEventListener('click', onEyesClick);
    wizardFireball.removeEventListener('click', onFireballClick);
    setupClose.removeEventListener('click', onCloseButtonClick);
    setupClose.removeEventListener('keydown', onCloseButtonKeydown);
    window.util.setup.style.top = window.util.initSetupCoords.top;
    window.util.setup.style.left = window.util.initSetupCoords.left;
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

  function onElementClick(index, arr, element, input, action) {
    index++;
    var newIndex = index < arr.length ? index : 0;
    switch (action) {
      case 'fill':
        element.style.fill = arr[newIndex];
        break;
      case 'background-color':
        element.style.background = arr[newIndex];
        break;
    }
    input.value = arr[newIndex];
    return newIndex;
  }

  function onCoatClick() {
    coatIndex = onElementClick(coatIndex, window.util.coatColors, wizardCoat, coatColorsInput, 'fill');
  }

  function onEyesClick() {
    eyesIndex = onElementClick(eyesIndex, window.util.eyesColors, wizardEyes, eyesColorsInput, 'fill');
  }

  function onFireballClick() {
    fireballIndex = onElementClick(fireballIndex, fireballColors, wizardFireball, fireballColorsInput, 'background-color');
  }
})();
