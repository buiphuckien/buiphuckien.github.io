// Updating new content to an element
function updateContent() {
    for(let i = 1; i<=4; i++){

        let id = 'a' + i;
        // Get the element by its ID
        let element = document.getElementById('a'+i);
        
        // Update the content of the element
        element.innerHTML = Math.random();
    }
    
}


function addNewElement() {

    for(let i = 1; i<=20; i++){
        // Create a new element
        var newElement = document.createElement("p");
        
        // Create a text node with the new content
        var newContent = document.createTextNode(`This is the new content ${i}!`);
        
        // Append the text node to the new element
        newElement.appendChild(newContent);
        
        // Get the container element
        var container = document.getElementById("container");
        
        // Append the new element to the container
        container.appendChild(newElement);
    }
    
}

// Function to initialize all required functions on page load
function initialize() {
    updateContent();
    addNewElement();
}

// Execute initialize function when the window loads
window.onload = initialize;