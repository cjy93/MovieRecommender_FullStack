window.onload = function () {
    // Carousel

    // first one found under querySelector
    const track = document.querySelector(".carousel__track"); /* first one*/
    console.log(track)
    const slides = Array.from(track.children);

    // Right button
    const nextButton = document.querySelector('.carousel__button--right');
    // left button
    const prevButton = document.querySelector('.carousel__button--left');
    // indicators button
    const dotsNav = document.querySelector('.carousel__nav');
    const dots = Array.from(dotsNav.children);
    // movement size depend on size of webpage
    const slideWidth = slides[0].getBoundingClientRect().width;
    console.log(slideWidth)
    // make slides next to each other instead of stacked. Use absolute positioning
    // use function name to show what this function is doing!
    const setSlidePosition = (slide, index) => {
        slide.style.left = String(slideWidth * index) + 'px';
    };
    slides.forEach(setSlidePosition);
    console.log(slides)
    // equivalent codes
    // slides.forEach((slide, index) => {
    //     slide.style.left = slideWidth * index + 'px';
    // })
    // equivalent below
    // slides[0].style.left = slideWidth * 0 + 'px';
    // slides[1].style.left = slideWidth * 1 + 'px';
    // slides[2].style.left = slideWidth * 2 + 'px';

    // function to move slide
    // javascript arrow function (short hand)
    const moveToSlide = (track, currentSlide, targetSlide) => {
        // move to the nextslide
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        // remove from classlist ( do not need to add the dot infront of class)        
        currentSlide.classList.remove('current-slide');
        // add class name to another classlist
        targetSlide.classList.add('current-slide');
    }

    const currentSlide = track.querySelector('.current-slide');
    console.log(track.querySelector('.current-slide'))
    console.log('Current slidessss' + currentSlide.classList)

    // when i click left, move slides to the left
    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        console.log('Current slide' + currentSlide.classList)
        const prevSlide = currentSlide.previousElementSibling;
        moveToSlide(track, currentSlide, prevSlide);
    });
    // when i click right, move slides to the right
    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        moveToSlide(track, currentSlide, nextSlide);
    });
    // // when i click the nav indicators, move to that
    // dotsNav.addEventListener('click', e => {
    //     // what indicator was clicked on? Make sure only clicked button not the nav bar
    //     const targetDot = e.target.closest('button');
    //     // if clicked on nav bar, return end of function, no need to go to next step of the function
    //     if (!targetDot) return;
    //     const currentSlide = track.querySelector('.current-slide');
    //     const currentDot = dotsNav.querySelector('.current-slide');
    // })



    // tutorial: https://www.youtube.com/watch?v=gBzsE0oieio
}