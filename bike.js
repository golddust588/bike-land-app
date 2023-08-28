import { getBike, deleteBike } from "./src/dataFetch.js";


const deleteButton = document.getElementById("delete-button");

const url = new URL(window.location.href);
export const bikeId = url.searchParams.get("id");

const insertBikeToScreen = (bike) => {
    const bikeImage = document.getElementById("bike-page-image");
    bikeImage.src = bike.photo_url;

    const name = document.getElementById("name");
    name.innerHTML = bike.name;

    const location = document.getElementById("location");
    location.innerHTML = bike.location;

    const price = document.getElementById("price");
    price.innerHTML = `Price: ${bike.price} €`;

    const description = document.getElementById("description");
    description.innerHTML = bike.description;
}


const displayBike = async () => {
    const bike = await getBike();
    console.log(bike);
    bike && insertBikeToScreen(bike);
}

displayBike();