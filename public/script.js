console.log('Script loaded!');
let video1 = document.getElementById('video1');
let video2 = document.getElementById('video2');

video1.addEventListener('loadedmetadata', function() {
  console.log('Video metadata loaded! Ready to play.');
  video1.play();
});

video2.addEventListener('loadedmetadata', function() {
  console.log('Video metadata loaded! Ready to play.');
  video2.play();
});