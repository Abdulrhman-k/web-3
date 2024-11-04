let currenIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showImage(index) {
    slides.forEach((slides, i )=>{
        slides.classList.toggle('active', i === index);
    });
}

function nextImage (){
    currenIndex = (currenIndex + 1) % totalSlides;
    showImage(currenIndex);
}

function prevImage (){
    currenIndex = (currenIndex - 1 + totalSlides) % totalSlides
    showImage(currenIndex);

}

let interval = setInterval(nextImage , 5000)

const slider = document.getElementById('slider');
slider.addEventListener('mouseenter', () => {
    clearInterval(interval); 
});

document.querySelector('.slider').addEventListener('mouseleave' , () =>{
    interval = setInterval(nextImage , 3000);
});

document.querySelector('.next').addEventListener('click', nextImage)
document.querySelector('.prev').addEventListener('click', prevImage)

