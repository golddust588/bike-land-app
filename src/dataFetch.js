
export const getAllbikes = async () => {
    const response = await fetch(
      "https://64ec5381f9b2b70f2bfa1b61.mockapi.io/bikes"
    );
    const bikes = await response.json();
    return bikes;
};
