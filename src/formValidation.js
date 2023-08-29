const submitMessage = document.getElementById("submit-message");

export const validateInputForm = (
    itemTitle,
    itemPrice,
    itemPhotoUrl,
    itemDescription,
    itemLocation
) => {
    if (itemTitle.length <= 2) {
        submitMessage.innerHTML = "Title has to have at least 3 characters";
        throw new Error("Title has to have at least 3 characters");
    }

    if (!itemPrice) {
        submitMessage.innerHTML = "Price input is empty";
        throw new Error("Price input is empty");
    }

    if (!itemPhotoUrl) {
        submitMessage.innerHTML = "Photo URL input is empty";
        throw new Error("Photo URL input is empty");
    }

    if (!itemDescription) {
        submitMessage.innerHTML = "Description input is empty";
        throw new Error("Description input is empty");
    }

    if (!itemLocation) {
        submitMessage.innerHTML = "Location input is empty";
        throw new Error("Location input is empty");
    }
};