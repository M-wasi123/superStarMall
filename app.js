// pages link dropDown Function
var dropDown = document.getElementById('downIcon')
var dropDownList = document.getElementById('dropDrownList')

dropDown.addEventListener('mouseover', function () {
    if (dropDownList.style.display === 'none') {
        dropDownList.style.display = 'block'
    }else{
        dropDownList.style.display = 'none'
    }
})
var dropDown1 = document.getElementById('dowIcon')
var dropDownList1 = document.getElementById('dropDrownLit')

dropDown1.addEventListener('mouseover', function () {
    if (dropDownList1.style.display === 'none') {
        dropDownList1.style.display = 'block'
    }else{
        dropDownList1.style.display = 'none'
    }
})
// mobile veiw navbar function
var hamBurger = document.getElementById('bar')
var navClose = document.getElementById('closeIcon')
var mobileNav = document.getElementById('mobileNav')

hamBurger.addEventListener('click', function () {
    if (mobileNav.style.display === 'none') {
        mobileNav.style.display = 'block'
    } else {
        mobileNav.style.display = 'none'
    }
})

navClose.addEventListener('click', function () {
    if (mobileNav.style.display === 'block') {
        mobileNav.style.display = 'none'
    } else {
        mobileNav.style.display = 'block'
    }
})
const wrapper = document.querySelector('.wrapper');
const slider = document.getElementById('#carousel');
const arrowButton = document.querySelectorAll('#arrowIcon');
const imageSlider = document.querySelectorAll('#carouselImage');

    let imageIndex = 1;
      intervalId;

    const autoslide = () => {
        intervalId = setInterval(() => slideImage(++imageIndex), 2000);
    }

    autoslide();

const slideImage = () => {
imageIndex = imageIndex === imageSlider.length ? 0 : imageIndex < 0 ? imageSlider.length -1 : imageIndex;

slider.style.transform = `transform(-${imageIndex * 100}%)`
};

