import{imageUrl, title, detail} from './News.js'

let photoSection = document.querySelector(".photo");
let descriptionSection = document.querySelector(".description");

let titleSection = descriptionSection.children[0];
let definitionSection = descriptionSection.children[1];

photoSection.style.backgroundImage = imageUrl;
titleSection.innerHTML = title;
definitionSection.innerHTML = detail;