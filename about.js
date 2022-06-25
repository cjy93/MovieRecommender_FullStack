// Filename: about.js
// All posters are hyperlinked to the original website, and hence they are the real source.
// Wherever the images are local, the hyperlinks are in the "alt" argument. This is because Cathay, GV and Shaw update their website quite often, so I download to play safe in case it cause my app to not show the images.

//* This section is for "cathayPromotions.html". Change promotional picture by clicking "1","2" or "3"rd  picture.
function modifyText1() {
    var posterImage = document.getElementById("promotion1")
    posterImage.innerHTML = '<a id="promoPosterLink" href="https://www.cathaycineplexes.com.sg/promotion-detail.aspx?id=2987"><img id="promoPosterImg" src="images/1.jpg" alt="https://www.cathaycineplexes.com.sg/images/3Carousel-LR.jpg"></a>'
}
function modifyText2() {
    var posterImage = document.getElementById("promotion1")
    posterImage.innerHTML = '<a id="promoPosterLink" href="https://www.cathaycineplexes.com.sg/promotion-detail.aspx?id=2959"><img id="promoPosterImg" src="images/2.jpg" alt="https://www.cathaycineplexes.com.sg/images/2Carousel-LR.jpg"></a>'
}
function modifyText3() {
    var posterImage = document.getElementById("promotion1")
    posterImage.innerHTML = '<a id="promoPosterLink" href="https://www.cathaycineplexes.com.sg/movie-detail.aspx?id=HO00001333&utm_source=social&utm_medium=instagram_skedlink&utm_campaign=Minions2TheRiseOfGru&utm_term=EngSub"><img id="promoPosterImg" src="images/3.jpg" alt="https://www.cathaycineplexes.com.sg/images/15Sample%20(1200x580).jpg"></a>'
}

//* this section is for 'shawpromotions.html'. Change promotional picture by clicking "1","2" or "3"rd  picture.
function modifyText4() {
    var posterImage = document.getElementById("promotion1")
    posterImage.innerHTML = '<a id="promoPosterLink" href="https://www.shaw.sg/promo-details/facebook--elvis-movie-premium-pack/CA-IG-ELVIS"><img id="promoPosterImg" src="images/4.jpg" alt="https://shawsgqk.gumlet.io/fetch/https://shawsgcdn.azureedge.net/prd/content/images/promotions/default/en-sg/2022-06-23-FB-Poster-Elvis.jpg?w=360&dpr=1.0"></a>'
}
function modifyText5() {
    var posterImage = document.getElementById("promotion1")
    posterImage.innerHTML = '<a id="promoPosterLink" href="https://www.shaw.sg/promo-details/instagram--minions-2--the-rise-of-gru/CA-IG-MINI2"><img id="promoPosterImg" src="images/5.jpg" alt="https://shawsgqk.gumlet.io/fetch/https://shawsgcdn.azureedge.net/prd/content/images/promotions/default/en-sg/Popcorn-set-(Shaw).jpg?w=360&dpr=1.0"></a>'
}
function modifyText6() {
    var posterImage = document.getElementById("promotion1")
    posterImage.innerHTML = '<a id="promoPosterLink" href="https://www.shaw.sg/promo-details/combo-of-the-month--marvel-studios-doctor-strange-in-the-multiverse-of-madness-/CA-SH-ComboS"><img id="promoPosterImg" src="images/6.jpg" alt="https://shawsgqk.gumlet.io/fetch/https://shawsgcdn.azureedge.net/prd/content/images/promotions/default/en-sg/MicrosoftTeams-image%20(1).png?w=360&dpr=1.0"></a>'
}


//* this section is for 'goldenVpromotions.html'. Change promotional picture by clicking "1","2" or "3"rd  picture.
function modifyText7() {
    var posterImage = document.getElementById("promotion1")
    posterImage.innerHTML = '<a id="promoPosterLink" href="https://www.gv.com.sg/GVPromotionDetails#/promotion/6f352109-ff2c-4d6e-a85b-5311251dc0ad"><img id="promoPosterImg" src="images/7.webp" alt="https://media.gv.com.sg/imagesresize/promo_toystudio_2locations.jpg"></a>'

}
function modifyText8() {
    var posterImage = document.getElementById("promotion1")
    posterImage.innerHTML = '<a id="promoPosterLink" href="https://www.gv.com.sg/GVPromotionDetails#/promotion/ca933eb0-4667-451a-88f9-7ce575c52302"><img id="promoPosterImg" src="images/8.webp" alt="https://media.gv.com.sg/imagesresize/promo_gcprecautionary_Apr22.jpg"></a>'
}
function modifyText9() {
    var posterImage = document.getElementById("promotion1")
    posterImage.innerHTML = '<a id="promoPosterLink" href="https://www.gv.com.sg/GVPromotionDetails#/promotion/dfb38c1c-3349-4f44-b763-ddfa93c67ed2"><img id="promoPosterImg" src="images/9.webp" alt="https://www.gv.com.sg/media/imagesresize/promo_gvmcogawa30.jpg"></a>'
}

window.onload = function () {
    //* Carousel code starts here

    // first image tracker found under querySelector
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


    }) // Carousel code ends here

    //* Click "1", "2" or "3" to access which poster
    // For "cathaypromotions.html" Add event listener to poster
    document.getElementById('button1m').addEventListener("click", modifyText1);
    document.getElementById('button2m').addEventListener("click", modifyText2);
    document.getElementById('button3m').addEventListener("click", modifyText3);
    // For "shawpromotions.html" Add event listener to poster
    document.getElementById('button4m').addEventListener("click", modifyText4);
    document.getElementById('button5m').addEventListener("click", modifyText5);
    document.getElementById('button6m').addEventListener("click", modifyText6);
    // For "goldenVpromotions.html" Add event listener to poster
    document.getElementById('button7m').addEventListener("click", modifyText7);
    document.getElementById('button8m').addEventListener("click", modifyText8);
    document.getElementById('button9m').addEventListener("click", modifyText9);

}
// Tutorial On how To Make Carousell From JS : https://www.youtube.com/watch?v=gBzsE0oieio