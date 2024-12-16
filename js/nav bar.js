function drop(dropId) {
  var dropContent = document.getElementById(dropId);
  var button = dropContent.previousElementSibling; // Get the button before the dropdown content

  // Toggle visibility of the dropdown menu
  dropContent.classList.toggle("show");

  // Toggle the "open" class to rotate the arrow
  button.classList.toggle("open");
}
