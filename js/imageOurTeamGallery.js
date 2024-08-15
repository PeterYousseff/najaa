const galleryItems = document.querySelectorAll('.gallery-item');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.querySelector('.close');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        popup.style.display = "block";
        popupImg.src = item.src;
    });
});

closeBtn.addEventListener('click', () => {
    popup.style.display = "none";
});

popup.addEventListener('click', (e) => {
    if (e.target !== popupImg) {
        popup.style.display = "none";
    }
});

