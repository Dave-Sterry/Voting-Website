$(document).ready(function() {
  const age = parseInt(prompt("What is your age?"));
  
  if(age > 18) {
    $("#over18").show();
  } else {
    $("#under18").show();
  }
});