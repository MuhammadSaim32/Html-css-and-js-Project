const input = document.querySelector("input");


function Rev(str) {
    return str.split("").reverse().join("")

}

function check() {
    const value = input.value;
    const rev = Rev(value);


    if (value === rev) {
        alert(" Palindrome")
    } else {
        alert("Not a  Palindrome")
    }
    input.value = "";
}