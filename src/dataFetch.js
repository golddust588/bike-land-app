import { bikeId } from "../bike.js";

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

export const getBike = async () => {
    try{
        const response = await fetch(BIKES_URL + "/" + bikeId);
        const bike = await response.json();
        return bike;
    } catch (err) {
        console.log(err);
        return false;
    }
};

export const deleteBike = async () => {
    try{
        const response = await fetch(BIKES_URL + "/" + bikeId, {
            method: "DELETE",
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        return false;
    }
};