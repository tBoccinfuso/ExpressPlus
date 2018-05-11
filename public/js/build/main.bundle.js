'use strict';

// Define our text and create a new paragraph element.
var helloWorld = 'This p tag and text is generated and included with ES6/Babel!';
var childNode = document.createElement('p');

// Assign text to p tag.
childNode.innerHTML = helloWorld;

// Select out empty div and append!
document.getElementById('es6Demo').appendChild(childNode);
