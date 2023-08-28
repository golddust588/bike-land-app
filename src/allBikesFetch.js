
const BIKES_URL = "https://64ec5381f9b2b70f2bfa1b61.mockapi.io/bikes"

export const getAllBikes = async () => {
    try{
        const response = await fetch(BIKES_URL);
        const bikes = await response.json();
        return bikes;
    } catch (err) {
        console.log(err);
        return false;
    }
};