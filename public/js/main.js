// Define our text and create a new paragraph element.
const helloWorld = 'This p tag and text is generated and included with ES6/Babel!'
let childNode = document.createElement('p')

// Assign text to p tag.
childNode.innerHTML = helloWorld

// Select out empty div and append!
document.getElementById('es6Demo').appendChild(childNode)