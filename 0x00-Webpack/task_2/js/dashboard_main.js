// Import jQuery and lodash
import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

// Add the required elements to the body
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Initialize the count
let count = 0;

// Function to update counter
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

// Bind the debounced updateCounter function to the button's click event
$('button').on('click', _.debounce(updateCounter, 500));

