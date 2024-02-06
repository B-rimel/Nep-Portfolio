// index.js

document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.graphic-button, .concept-button');
    var conceptModal = document.getElementById('conceptModal');
    var conceptImage = document.querySelector('.concept img');
  
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var filterClass = button.getAttribute('data-id');
        toggleImages(filterClass);
      });
    });
  
    // Initial display (optional)
    toggleImages('graphic');
  
    conceptImage.addEventListener('click', openConceptModal);
    conceptModal.addEventListener('click', closeConceptModal);
  });
  
  function toggleImages(filterClass) {
    var allFigures = document.querySelectorAll('figure.graphic, figure.concept');
  
    allFigures.forEach(function (figure) {
      if (figure.classList.contains(filterClass) || filterClass === 'all') {
        figure.style.display = 'block';
      } else {
        figure.style.display = 'none';
      }
    });
  }
  
  
  function openConceptModal() {
    var conceptModal = document.getElementById('conceptModal');
    conceptModal.style.display = 'flex'; // Display the modal
  }
  
  function closeConceptModal(event) {
    var conceptModal = document.getElementById('conceptModal');
    var conceptImage = document.querySelector('.concept img');
  
    // Check if the click is outside the concept image in the modal
    if (event.target === conceptModal && event.target !== conceptImage) {
      conceptModal.style.display = 'none'; // Hide the modal
    }
  }
  