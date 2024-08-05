let lastTouchTime = 0;

function showHearts(event) {
  var container = event.currentTarget.parentElement;

  for (var i = 0; i < 10; i++) {
    var heart = document.createElement('div'); 
    heart.classList.add('heart');
    heart.innerHTML = ' ❤️';
    heart.style.left = `${Math.random() * 100}%`; 
    heart.style.top = `${Math.random() * 100}%`; 
    heart.style.display = 'block'; 
    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 600); 
  }
}


document.getElementById('myimage').addEventListener('dblclick', showHearts);


document.getElementById('myimage').addEventListener('touchend', function(event) {
  const now = new Date().getTime();
  if (now - lastTouchTime <= 300) { 
    showHearts(event);
  }
  lastTouchTime = now;
});
 