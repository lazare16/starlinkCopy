const input = document.getElementById("myInput");
const button = document.getElementById("myButton");


// function to clear up input field after pressing the button
function clearInput() {
  document.getElementById("myInput").value = "";
  // after clearing input button will hide
  button.style.display = "none";
}


// event listener if input has value in it or no
input.addEventListener("input", () => {
  if (input.value) {
    // if input has value in it button will be displayed otherwise hidden
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

// Check if the browser is Mozilla Firefox so we can align x correctly for mozilla
if (navigator.userAgent.indexOf("Firefox") != -1) {
  // Code to only affect Mozilla Firefox
  button.style.left = "62%";
}

