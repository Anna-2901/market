import '../css/about.css';
import houses from '../data/houses.js'
// console.log(houses)
import refs from '../js/refs.js';

const {about} = refs;
// console.log(about);

// === добавляем разметку для секции ===
const aboutTitle = document.createElement("h2");
about.appendChild(aboutTitle);

const housesList = document.createElement("ul");
housesList.classList.add('housesList');
// === создаем ф-цию для перебора и передачи массива ===
function createItem(array) {
    // console.log(array);
    const li = array.map((house) => {
        const { name, picture, price } = house;
        // console.log(name, picture, price);

        const housesItem = document.createElement("li");
        housesItem.classList.add('housesItem');
        const housesName = document.createElement("h3");
        housesName.textContent = name;
        // === делаем перебор фото в обЪекте ===
        const pictures = picture.map((url) => {
            const housesImage = document.createElement("img");
            housesImage.setAttribute("src", url);
            housesImage.setAttribute("width", "200");
            return housesImage
            });
        // console.log(pictures);
        const imageContainer = document.createElement("div");
        imageContainer.classList.add('imageWrapper');
        imageContainer.append(...pictures);
    const housesPrice = document.createElement("p");
        housesPrice.textContent = `${price}$`;
    housesItem.append(housesName, imageContainer, housesPrice);
        return housesItem;
    });
    console.log(li);
    return li;
}
console.log(createItem(houses));
const a = createItem(houses);
housesList.append(...a);
console.log(housesList);
about.append(housesList)
