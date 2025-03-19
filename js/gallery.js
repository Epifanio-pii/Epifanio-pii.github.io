let titulo = document.getElementById("title");
let description = document.getElementById("desc");
let image = document.getElementById("image");
let container = document.getElementById("container");

let myOBJ = fetch('./js/content.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parses the JSON data
    });

myOBJ.then(data => {
    const samples = data.sample; 

    // Loop through the sample array and create HTML elements for each item
    samples.forEach((item, index) => {
        let img_item = document.createElement("div");
        img_item.classList.add("img-item"); 

        // Create the image element
        let image = document.createElement("img");
        image.src = item.url; // Get the image URL
        image.alt = item.title; // Use the title as the alt text

        // Create and add title
        let title_container = document.createElement("a");
        let title_div = document.createElement("div");
        title_div.classList.add("imgtext");
        
        title_container.href = "./projects.html";
        // Add the click event listener to the image
        title_container.addEventListener("click", () => {
            // Store the image data in sessionStorage
            sessionStorage.setItem("selectedImage", JSON.stringify(item));
        });


        let title_text = document.createElement("span");
        title_text.classList.add("text-1");
        title_text.textContent = item.title;

        // Append elements together
        title_div.appendChild(title_text);
        title_container.appendChild(title_div);
        img_item.appendChild(image);
        img_item.appendChild(title_container);

        // Append the img_item to the appropriate grid
        if (index === 0 || index === 1) {
            document.getElementById("grid1").appendChild(img_item);
        } else if (index === 3 || index === 4 ) {
            document.getElementById("grid2").appendChild(img_item);
        } else {
            document.getElementById("grid3").appendChild(img_item);
        }
    });
})
.catch(error => {
    console.error('Error fetching JSON:', error);
});
