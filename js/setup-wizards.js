'use strict';

(function () {
  var similarWizardsSetup = document.querySelector('.setup-similar');

  window.showWizards = function (numberOfCopy, template, destination, arr) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < numberOfCopy; i++) {
      var newElement = template.cloneNode(true);
      fragment.appendChild(newElement);
      newElement.querySelector('.setup-similar-label').textContent = arr[i].name;
      newElement.querySelector('.wizard-coat').style.fill = arr[i].colorCoat;
      newElement.querySelector('.wizard-eyes').style.fill = arr[i].colorEyes;
    }
    destination.appendChild(fragment);
  };

  // setup.classList.remove('hidden');
  similarWizardsSetup.classList.remove('hidden');
})();
