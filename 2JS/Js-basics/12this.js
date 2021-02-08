// 1.  method -> obj
// 2 . function -> global(window)


// 1:
const video ={
  title: 'q',
  play: function () {
    console.log(this);    //this represents obj itself
  }
};
video.play()

video.stop = function () {
  console.log(this);    //represent video obj cause it is within the scope
}
video.stop();



// 2:
function regularFunction() {
  console.log(this);     //represent the window obj
}
regularFunction();
