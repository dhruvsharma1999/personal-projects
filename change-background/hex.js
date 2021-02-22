const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
    let hexcolor = '#';
    
    for (i=0; i<6; i++){
        const num = getRandomNumber();
        hexcolor += hex[num];
    }

    color.textContent = hexcolor;
    document.body.style.backgroundColor = hexcolor;

})

//Functiont to generate random number equal the length of hex array

const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length)
}