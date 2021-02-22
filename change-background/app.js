const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// selecting button element
const btn = document.getElementById("btn");
// selecting color element
const color = document.querySelector(".color");

//adding functionality to the selected elments
btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})

//function to genereate a number betwee 0-3 i.e the number of element in array colors
const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
}