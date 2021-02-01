import { addClass, removeClass } from "./utils-class.js";

const carouselId = document.getElementById("carousel")
const carouselItems = document.getElementsByClassName("flex")[0]
const carouselContainer = document.getElementsByClassName("container")[0]

function carouselCalculateOffset() {
    const carouselOffset = carouselContainer.getBoundingClientRect().left;

    carouselItems.style.paddingLeft = `${carouselOffset -16 }px`
    carouselItems.style.paddingRight = `${carouselOffset -16 }px`

}

function slide (wrapper, items) {
    let posX1 = 0, 
        posX2 = 0, 
        posInitial, 
        posFinal, 
        threshold = 100, 
        itemToShow = 4,
        slides = items.getElementsByClassName("card"),
        slidesLength = slides.length,
        slideSize = items.getElementsByClassName("card")[0].offsetWidth,
        index = 0,
        allowShift = true;

        wrapper.classList.add("loaded");

        items.onmousedown = dragStart;

        items.addEventListener("touchstart", dragStart);
        items.addEventListener("touchend", dragEnd);
        items.addEventListener("touchmove", dragAction);

        items.addEventListener("transitionend", checkIndex);

        function dragStart(event){
            event = event || window.event
            event.preventDefault()
            posInitial = items.offsetLeft;

            if(event.type == "touchStart") {
                posX1 = event.touches[0].clientX
            }
            else {
                posX1 = event.clientX;
                document.onmouseup = dragEnd;
                document.onmousemove = dragAction;
            }
        }
        
        function dragAction(event){
            event = event || window.event

            if(event.type == "touchmove") {
                posX2 = posX1 - event.touches[0].clientX
                posX1 = event.touches[0].clientX
            }
            else {
                posX2 = posX1 - event.clientX
                posX1 = event.clientX
            }

            items.style.Left = `${items.offsetLeft - posX2}px`
        }
}

if (carouselId) {
    slide(carouselId, carouselItems);
    window.addEventListener("load", carouselCalculateOffset);
    window.addEventListener("resize", carouselCalculateOffset);
}