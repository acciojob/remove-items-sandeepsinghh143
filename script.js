//your JS code here. If required.
var removeButton = document.getElementById("removeButton");
removeButton.addEventListener("click", removeColor);
function removeColor() {
  var selectElement = document.getElementById("colorSelect");
  var selectedOption = selectElement.options[selectElement.selectedIndex];
  if (selectedOption) {
    selectElement.removeChild(selectedOption);
  }
}