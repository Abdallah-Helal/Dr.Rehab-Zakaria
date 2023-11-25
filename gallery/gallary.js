// Get the parent element with class "gallary-section"
var gallaryGrid = document.querySelector(".gallary-grid");

// Number of gallery grids you want to create
var numberOfGalleries = 30; // You can change this number as needed

// Loop to create and append gallery grids
for (var i = 1; i <= numberOfGalleries; i++) {
  // You can add more content or modify each gallery grid as needed
  // For example, adding images to each gallery grid
  var galleryImage = document.createElement("div");
  galleryImage.className = "gallary";
  var image = document.createElement("img");
  image.className = "gallary-image";
  image.src = "./images/BeforAfter- (" + i + ").jpg"; // Assuming your image names follow a pattern like BeforAfter-1.jpg, BeforAfter-2.jpg, etc.
  image.alt = "img";
  galleryImage.appendChild(image);

  // Append the image div to the current gallery grid
  gallaryGrid.appendChild(galleryImage);
}
