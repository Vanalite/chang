// Get the elements
const elementA = document.querySelector("#move-random");
const elementB = document.getElementById('larger-yes');

// Initial size for element B
let currentSize = 50;

// Track if we've grown already
let hasGrown = false;

// Function to increase size of element B by 5px once
function increaseSize() {
    currentSize += 10;
    elementB.style.width = currentSize + 'px';
    elementB.style.height = currentSize + 'px';
}

// Function to make element A jump to a random position
function jumpRandomly() {
    // Get the dimensions of the viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Calculate the new random position
    // Keep it at least 100px from the edges
    const newX = Math.random() * (viewportWidth - 350) + 100;
    const newY = Math.random() * (viewportHeight - 350) + 100;
    
    // Apply the new position
    elementA.style.position = 'absolute';
    elementA.style.left = newX + 'px';
    elementA.style.top = newY + 'px';
}

// Start effects when hovering over element A
elementA.addEventListener('mouseenter', function() {
    // Make element A jump
    jumpRandomly();
    
    // Increase size of element B just once per hover
    increaseSize();
});

// When mouse leaves the document
document.addEventListener('mouseleave', function() {
    // No need to clear interval since we're not using one anymore
    
    // We don't reset the size now - it stays at whatever size it grew to
});

// Add a reset button to help when element A jumps too far
document.addEventListener('keydown', function(event) {
    if (event.key === 'r' || event.key === 'R') {
        // Reset positions
        elementA.style.position = 'static';
        
        // Reset size of element B
        currentSize = 100;
        elementB.style.width = currentSize + 'px';
        elementB.style.height = currentSize + 'px';
        
        // Reset the growth counter
        currentSize = 100;
        
        // Refresh page layout
        setTimeout(() => {
            window.location.reload();
        }, 100);
    }
});
