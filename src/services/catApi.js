export async function getBreeds(){
    const response = await fetch('https://api.thecatapi.com/v1/breeds');
    const responseJson = await response.json();
    return responseJson;
};

export async function searchBreeds(q){
    const response = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${q}`);
    const responseJson = await response.json();
    return responseJson;
};

export default {
    getBreeds,
    searchBreeds
};