// Change text content
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("text").textContent = "The text has been updated dynamically!";
});

// Modify CSS styles
document.getElementById("changeStyleBtn").addEventListener("click", function () {
  document.getElementById("main-heading").style.color = "blue";
  document.getElementById("main-heading").style.fontSize = "2.5rem";
});

// Add an element
document.getElementById("addElementBtn").addEventListener("click", function () {
  const newElement = document.createElement("p");
  newElement.textContent = "🆕 A new paragraph has been added!";
  newElement.className = "dynamic-paragraph";
  document.getElementById("container").appendChild(newElement);
});

// Remove the last added element
document.getElementById("removeElementBtn").addEventListener("click", function () {
  const container = document.getElementById("container");
  if (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
});
