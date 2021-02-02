$(document).ready(onReady);

// global variable to track how many times the generate button has been clicked
let clickCount = 0;

function onReady() {
  $(document).on('click', '.generate-button', generateDiv);
  $(document).on('click', '.yellow-button', yellowBackground);
  $(document).on('click', '.delete-button', deleteDiv);
}

// function that generates a div with a red-background
function generateDiv() {
  // increment click count
  clickCount++;
  // append a new div to the existing container
  // also add a button to turn the div yellow and a delete button
  $('.div-container').append(` <div class="red-div">
  <p class="click-count">${clickCount}</p>
  <button class="yellow-button">Yellow</button>
  <button class="delete-button">Delete</>
</div>`);
}

// function that targets the div of which the yellow button was pressed and changes the background to yellow
function yellowBackground() {
  $(this).parent().attr('class', 'yellow-div');
}

// function that targets the div of which the delete button was pressed and removes it from the DOM
function deleteDiv() {
  $(this).parent().remove();
}
