import { getBike, deleteBike } from "./src/oneBikeFetch.js";


const deleteButton = document.getElementById("delete-button");

const url = new URL(window.location.href);
export const bikeId = url.searchParams.get("id");

const insertItemToScreen = (bike) => {
    const bikeImage = document.getElementById("bike-page-image");
    bikeImage.src = bike.photo_url;

    const name = document.getElementById("name");
    name.innerHTML = bike.name;

    const location = document.getElementById("location");
    location.innerHTML = `City: ${bike.location}`;

    const price = document.getElementById("price");
    price.innerHTML = `Price: ${bike.price} €`;

    const description = document.getElementById("description");
    description.innerHTML = bike.description;
}

const onItemDeleted = (data) => {
    const infoMessage = document.getElementById("info-message");
    if (data) {
      infoMessage.innerHTML = "Item was deleted";
    } else {
      infoMessage.innerHTML = "Item was NOT deleted, please try again later";
    }
};

const onClickDeleteButton = async () => {
    try {
      const response = await deleteBike();
      console.log(response);
      onItemDeleted(response);
    } catch (err) {
      console.log(err);
    }
};

deleteButton.addEventListener("click", onClickDeleteButton);

const displayItem = async () => {
    const bike = await getBike();
    bike && insertItemToScreen(bike);
};

displayItem();