const inputTitle = document.getElementById("in-title");
const inputCat = document.getElementById("in-cat");
const inputimgsrc = document.getElementById("in-src");
const inputpara = document.getElementById("in-para");
const container = document.querySelector(".card-container");

let rangerandom = (min,max) => {
    return Math.floor(Math.random()*(max-min)+min);
}

const createcard = () => {
    const Card = document.createElement("div");
    const card_content = document.createElement("div");
    const h6 = document.createElement("h6");
    const img = document.createElement("img");
    const para = document.createElement("p");
    const title = document.createElement("h1");
    const images = ['pexels-alexandre-weiss-9443251.jpg','pexels-any-lane-5727715.jpg','pexels-beyza-efe-8263404.jpg','pexels-dids-2456348.jpg']

    if (inputimgsrc.value == "random") {
        const Ig = rangerandom(0,images.length)
        console.log(images[Ig]);
        img.setAttribute("src",images[Ig]);
    }
    else{
        img.setAttribute("src",inputimgsrc.value);
    }
    console.log(inputimgsrc.value);
    Card.setAttribute("class","card");
    card_content.setAttribute("class","card-content");
    h6.innerHTML = inputCat.value;
    title.innerHTML = inputTitle.value;
    para.innerHTML = inputpara.value;

    container.appendChild(Card);
    Card.appendChild(img);
    Card.appendChild(card_content);
    card_content.appendChild(h6);
    card_content.appendChild(title);
    card_content.appendChild(para);

}


