// select heading
let heading_el = document.getElementById("heading");
// select input field
let input_el = document.getElementById("number-input");
// select btn
let check_btn = document.getElementById("check-btn");
// select result
let result_el = document.getElementById("result");

// create an onclick function for btn
check_btn.addEventListener("click", ()=> {
    checkNumber();
})

// create a function for loop operation
function checkNumber() {
    // store val of input field
    let number_val = input_el.value;

    // now start the for loop to get the character
    for (i = 0; i <= 255; i++) {
        result_el.innerHTML = String.fromCharCode(number_val);
    }

    // check if number is greater then 255
    if (number_val > 255 || number_val < 0) {
        
        result_el.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        result_el.style.color = "red";
        heading_el.innerHTML = "Enter Number Less Then 256 Only";
        heading_el.style.color = "red";
        heading_el.style.textShadow = "1px 1px 5px red";

        setTimeout(() => {
            heading_el.innerHTML = "Know The Character With The Help Of Numbers";
            heading_el.style.color = "";
            heading_el.style.textShadow = "";
            result_el.innerHTML = "?";
            result_el.style.color = "";
        }, 2500);
    }
}