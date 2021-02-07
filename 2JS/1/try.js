function $(id) {
  return document.getElementById(id);

}

function dd() {
  $('DD').style.backgroundColor = 'red';
  $('DD').innerHTML = 'Changed the content.';
  $('btn').value = 'Changed';
  $('btn').disabled = true;
}
