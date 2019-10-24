'use strict';
(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var TOP_POSITION = '80px';
  var LEFT_POSITION = '50%';

  var setup = document.querySelector('.setup');
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
  var WIZARD_NUMBER = 4;
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var wizardsCollection = document.getElementsByClassName('setup-similar-item');
  var initSetupCoords = {
    top: TOP_POSITION,
    left: LEFT_POSITION
  };

  var fireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

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

  function onSaveButtonClick(evt) {
    evt.preventDefault();
    window.backend.save(wizardForm, onLoad, onError);
  }

  function onSaveButtonPress(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      evt.preventDefault();
      window.backend.save(wizardForm);
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

  function onLoad(response) {
    window.showWizards(WIZARD_NUMBER, similarWizardTemplate, similarListElement, response);
  }

  function onError(errorMessage) {
    var divError = document.getElementsByClassName('error')[0];
    var wizardsHeader = document.querySelector('.setup-similar-title');
    if (!divError) {
      var div = document.createElement('div');
      div.className = 'error';
      div.style.textAlign = 'center';
      wizardsHeader.after(div);
      div.textContent = errorMessage;
    }
  }

  function openPopup() {
    setup.classList.remove('hidden');
    window.backend.load(onLoad, onError);
    // console.log(xhrResponse);
    document.addEventListener('keydown', onPopupEscPress);
    wizardForm.addEventListener('submit', onSaveButtonClick);
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
    wizardForm.removeEventListener('submit', onSaveButtonClick);
    saveButton.removeEventListener('keydown', onSaveButtonPress);
    wizardCoat.removeEventListener('click', onCoatClick);
    wizardEyes.removeEventListener('click', onEyesClick);
    wizardFireball.removeEventListener('click', onFireballClick);
    setupClose.removeEventListener('click', onCloseButtonClick);
    setupClose.removeEventListener('keydown', onCloseButtonKeydown);
    setup.style.top = initSetupCoords.top;
    setup.style.left = initSetupCoords.left;
    // remove wizards:
    while (wizardsCollection.length) {
      wizardsCollection[0].parentNode.removeChild(wizardsCollection[0]);
    }
    // remove error message:
    var errorMessage = document.getElementsByClassName('error')[0];
    if (errorMessage) {
      errorMessage.remove();
    }
    // remove loading message:
    var loadMessage = document.getElementsByClassName('loading')[0];
    if (loadMessage) {
      loadMessage.remove();
    }
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
    coatIndex = onElementClick(coatIndex, coatColors, wizardCoat, coatColorsInput, 'fill');
  }

  function onEyesClick() {
    eyesIndex = onElementClick(eyesIndex, eyesColors, wizardEyes, eyesColorsInput, 'fill');
  }

  function onFireballClick() {
    fireballIndex = onElementClick(fireballIndex, fireballColors, wizardFireball, fireballColorsInput, 'background-color');
  }

  var dialogHandler = setup.querySelector('.upload');

  function onClickPreventDefault(evt) {
    evt.preventDefault();
    dialogHandler.removeEventListener('click', onClickPreventDefault);
  }

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    function onMouseMove(moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';

    }

    function onMouseUp(upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        onClickPreventDefault(evt);
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
