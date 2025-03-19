window.addEventListener('DOMContentLoaded', () => {
    // Retrieve the image data from sessionStorage
    const imageData = JSON.parse(sessionStorage.getItem('selectedImage'));

    if (imageData) {
        // Update the project image and details
        document.getElementById('project-image').src = imageData.url;
        document.getElementById('project-image').alt = imageData.title;
        document.getElementById('project-title').textContent = imageData.title;
        document.getElementById('project-category').textContent = imageData.category; 
        document.getElementById('legend').textContent = imageData.description || 'No description available'; 


        document.getElementById('project-author').textContent = imageData.author;
        document.getElementById('project-date').textContent = imageData.date; // Replace with actual date if available
        document.getElementById('project-skills').textContent = imageData.skills; // Replace with actual skills if available
      

    } else {
        console.error('No image data found.');
    }
});

