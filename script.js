import { getAllbikes } from "./src/dataFetch.js";

const bikesWrapper = document.getElementById('bikes-wrapper');

const buildBikeCard = (bike) => {
    const wrapper = document.createElement("a");
    wrapper.setAttribute("class", "bike-wrapper");
    wrapper.href = "./bike.html?id=" + bike.id;

    const image = document.createElement("img");
    image.setAttribute("class", "bike-image");
    image.src = bike.img_url;

    const name = document.createElement("h1");
    title.innerHTML = bike.name;

    const price = document.createElement("p");
    description.innerHTML = bike.price;

    wrapper.append(image);
    wrapper.append(name);
    wrapper.append(price);

    return wrapper;
};

