const btn = document.querySelector('.btn');
const closeEl = document.querySelector('i');
const trailerContainer = document.querySelector('.trailer-container ');
const videoEl = document.querySelector('video');

btn.addEventListener('click',()=>{
  trailerContainer.classList.remove('active');
})

closeEl.addEventListener('click',()=>{
  trailerContainer.classList.add('active');
  videoEl.pause();
  videoEl.currentTime = 0;
})