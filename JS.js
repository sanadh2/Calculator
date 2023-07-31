function equal() {
  var display = document.getElementById("display").value;
  var ans = eval(display);
  document.getElementById("display").value = ans;
}
