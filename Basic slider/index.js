let currentImageIndex = 0;
let images = [
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg'
];
let sliderContainer = document.getElementById('slider-container');
let sliderImagesContainer = document.getElementById('slider-images');
let prevButton = document.getElementById('prev-button');
let nextButton = document.getElementById('next-button');

function createImageElement(src) {
  let img = document.createElement('img');
  img.src = src;
  return img;
}

function showImage(index) {
  sliderImagesContainer.innerHTML = '';
  
  let image = createImageElement(images[index]);
  sliderImagesContainer.appendChild(image);

  if (index === 0) {
    prevButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
  }

  if (index === images.length - 1) {
    nextButton.style.display = 'none';
  } else {
    nextButton.style.display = 'block';
  }
}

function showNextImage() {
  if (currentImageIndex < images.length - 1) {
    currentImageIndex++;
    showImage(currentImageIndex);
  }
}

function showPrevImage() {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    showImage(currentImageIndex);
  }
}

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

showImage(currentImageIndex);
