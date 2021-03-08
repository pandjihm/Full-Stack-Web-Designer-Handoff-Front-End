import { addClass, removeClass } from "./utils-class.js";

let data = {
    "complete-name": "",
    "email": "",
    "address": "",
    "phone-number": "",
    "courier": "",
    "payment": "",
}

const inputs = document.querySelectorAll("#shipping-detail input[data-input]")
for (let index = 0; index < inputs.length; index++) {
    const input = inputs[index];
    input.addEventListener("change", function(event) {
        data[event.target.id] = event.target.value

        check()
    })
}

function check(){
    const find = Object.values(data).filter( (item) =>  )
}