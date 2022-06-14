window.onload = function () {
    // Carousel

    // first one found under querySelector
    const track = document.querySelector(".carousel__track"); /* first one*/
    console.log(track)
    const slides = Array.from(track.children);
    console.log(slides[0].getBoundingClientRect())
    console.log(slides[0])

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
        console.log(track.querySelector('.current-slide'))
        console.log("test" + targetSlide)
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        // remove from classlist ( do not need to add the dot infront of class)        
        currentSlide.classList.remove('current-slide');
        // add class name to another classlist
        targetSlide.classList.add('current-slide');
    }

    // when your slides are moved by the arrows, also make the dots follow to the same slide
    const updateDots = (currentDot, targetDot) => {
        // adjust which slide to be the current slide
        currentDot.classList.remove('current-slide');
        targetDot.classList.add('current-slide');
    }

    const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
        // want to hide left and right button when it reaches the end of the slides
        if (targetIndex === 0) {
            prevButton.classList.add('is-hidden')
            nextButton.classList.remove('is-hidden')
        } else if (targetIndex === slides.length - 1) {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.add('is-hidden');
        } else {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.remove('is-hidden');
        }
    }

    // const currentSlide = track.querySelector('.current-slide');
    // console.log(track.querySelector('.current-slide'))
    // console.log('Current slidessss' + currentSlide.classList)

    // when i click left, move slides to the left
    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        const currentDot = dotsNav.querySelector('.current-slide');
        const prevDot = currentDot.previousElementSibling;
        const prevIndex = slides.findIndex(slide => slide === prevSlide);
        moveToSlide(track, currentSlide, prevSlide);
        updateDots(currentDot, prevDot);
        hideShowArrows(slides, prevButton, nextButton, prevIndex)
    });
    // when i click right, move slides to the right
    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        const currentDot = dotsNav.querySelector('.current-slide');
        const nextDot = currentDot.nextElementSibling;
        const nextIndex = slides.findIndex(slide => slide === nextSlide);
        moveToSlide(track, currentSlide, nextSlide);
        updateDots(currentDot, nextDot);
        hideShowArrows(slides, prevButton, nextButton, nextIndex)
    });
    // when i click the nav indicators, move to that
    dotsNav.addEventListener('click', e => {
        // what indicator was clicked on? Make sure only clicked button not the nav bar
        const targetDot = e.target.closest('button');
        // if clicked on nav bar, return end of function, no need to go to next step of the function
        if (!targetDot) return;
        const currentSlide = track.querySelector('.current-slide');
        const currentDot = dotsNav.querySelector('.current-slide');
        const targetIndex = dots.findIndex(dot => dot === targetDot)
        const targetSlide = slides[targetIndex];
        moveToSlide(track, currentSlide, targetSlide);
        updateDots(currentDot, targetDot);
        hideShowArrows(slides, prevButton, nextButton, targetIndex);


    })



    // tutorial: https://www.youtube.com/watch?v=gBzsE0oieio
}