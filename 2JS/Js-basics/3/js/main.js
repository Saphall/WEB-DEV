window.onload = function() {
  var btn = document.getElementById('go')

  function buttonClicked() {
    alert(1);
  }

  btn.addEventListener('click', buttonClicked);

}
