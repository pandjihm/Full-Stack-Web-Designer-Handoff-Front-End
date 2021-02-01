import { addClass, removeClass } from "./utils-class.js";

const carouselID = document.getElementById("carousel")
const carouselItems = document.getElementsByClassName("flex")[0]
const carouselContainer = document.getElementsByClassName("container")[0]

function carouselCalculateOffset() {
    const carouselOffset = carouselContainer.getBoundingClientRect().left;

    carouselItems.style.paddingLeft = `${carouselOffset -16 }px`
    carouselItems.style.paddingRight = `${carouselOffset -16 }px`

}

if (carouselID) {
    window.addEventListener("load", carouselCalculateOffset);
    window.addEventListener("resize", carouselCalculateOffset);
}