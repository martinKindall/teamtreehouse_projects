//Select select box
var navigationSelect = document.getElementById("nav");

//Navigate to URL when select box is changed
var navigateToValue = function() {
  console.log("link");
  window.location = this.value;
}

//Send analytics data
var sendAnalytics = function() {
  //Placeholder  
}

navigationSelect.addEventListener('change', navigateToValue);
navigationSelect.addEventListener('change', sendAnalytics);
