// Define our text and create a new paragraph element.
const helloWorld = 'This p tag and text is generated and included with ES6/Babel!'
let childNode = document.createElement('p')

// Assign text to p tag.
childNode.innerHTML = helloWorld

// Select out empty div and append!
if (document.getElementById('es6Demo'))
  document.getElementById('es6Demo').appendChild(childNode)

//Set button onClick events to navigate the site
if (document.getElementById('btnLinks'))
  document.getElementById('btnLinks').addEventListener('click', () =>{
    location.href = location.href + "links"
  });

// Navigate to /hello 
if (document.getElementById('btnHello'))
  document.getElementById('btnHello').addEventListener('click', () =>{
    location.href = location.href + "hello"
  });

// Navigate to /hello 
if (document.getElementById('btnHome'))
  document.getElementById('btnHome').addEventListener('click', () =>{
    const loc = location.href.lastIndexOf('/');
    const x = location.href.slice(0, loc);
    location.href = x;
  });