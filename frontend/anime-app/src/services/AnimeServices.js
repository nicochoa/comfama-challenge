export const getAnimes = async( term , page = 1 )=>{
    let response = await fetch(`http://localhost:4000/anime/${term}?pageId=${page}`);
    let data = await response.json();
    return data;
}