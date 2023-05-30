//your JS code here. If required.
let button=document.getElementsByTagName("button")[0];
button.addEventListener("click" function(event){
	event.preventDefault();
  var selectElement = document.getElementById("colorSelect");
  var selectedOption = selectElement.options[selectElement.selectedIndex];
  if (selectedOption) {
    selectElement.removeChild(selectedOption);
  }
});