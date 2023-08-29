import { validateInputForm } from "./src/formValidation.js";

const addNewFormButton = document.getElementById("submit-button");
const submitMessage = document.getElementById("submit-message");

const getItemObject = () => {
    const itemTitle = document.getElementById("item-title").value;
    const itemPrice = document.getElementById("item-price").value;
    const itemPhotoUrl = document.getElementById("photo-url").value;
    const itemDescription = document.getElementById("item-description").value;
    const itemLocation = document.getElementById("item-location").value;

    validateInputForm (
        itemTitle,
        itemPrice,
        itemPhotoUrl,
        itemDescription,
        itemLocation
    );

    const itemObject = {
        "name": itemTitle,
        "price": itemPrice,
        "photo_url": itemPhotoUrl,
        "description": itemDescription,
        "location": itemLocation
    };

    console.log(itemObject)
    return itemObject;
}

const insertItem = async (itemObject) => {
    try {
        const response = await fetch(
            "https://64ec5381f9b2b70f2bfa1b61.mockapi.io/bikes",
            {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(itemObject), 
            }
        );
        const data = await response.json();
        return data;
    }   catch (err) {
        return false;
    }
};

const onItemInserted = (data) => {
    if (data) {
        submitMessage.innerHTML = "Item inserted!"
    } else {
        submitMessage.innerHTML = "Item was not inserted, try again later."
    }
}

addNewFormButton.addEventListener("click", async () => {
    try {
        const itemObject = getItemObject();
        const data = await insertItem(itemObject);
        onItemInserted(data);
    } catch (err) {
        console.log(err);
    }
});
