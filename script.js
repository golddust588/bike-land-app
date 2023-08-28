import { getAllBikes } from "./src/dataFetch.js";

const bikesWrapper = document.getElementById('bikes-wrapper');

const buildBikeCard = (bike) => {
    const wrapper = document.createElement("a");
    wrapper.setAttribute("class", "bike-wrapper");
    wrapper.href = "./bike.html?id=" + bike.id;

    const image = document.createElement("img");
    image.setAttribute("class", "bike-image");
    image.src = bike.photo_url;

    const name = document.createElement("h1");
    name.innerHTML = bike.name;

    const price = document.createElement("h3");
    price.innerHTML = `Price: ${bike.price} €`;
    price.setAttribute("class", "price");

    wrapper.append(image);
    wrapper.append(name);
    wrapper.append(price);

    return wrapper;
};

const fillCardsWithData = async() => {
    const data = await getAllBikes();
    data.sort((a, b) => {
        return a.price - b.price;
    });
    data.forEach((bike) => {
        const card = buildBikeCard(bike);
        bikesWrapper.append(card);
      });
}

fillCardsWithData();
