/* script.js */
import $ from 'jquery';

// This script is used to handle form submissions
$(function() {
  $('form').submit(function(e) {
    e.preventDefault();

    // Get values from form inputs
    const name = $('#name').val();
    const email = $('#email').val();
    const message = $('#message').val();

    // Display form values in an alert
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Clear form inputs
    $('#name').val('');
    $('#email').val('');
    $('#message').val('');
  });
});
