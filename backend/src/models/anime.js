const { createError } = require("../errors/anime.js")

module.exports = {

  animeByName: async (name, page = 1) => {

    let response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${name}&page=${page}&sfw`
    );
    let data = await response.json();
    
    if (!response.ok){
      createError(
        `Ocurrio un erroooorrr : ${response.status} 🤯 🤯 🤯`,
        response.status
      );
    }
    if (data.status && data.status == "500")
      createError(
        `Ocurrio un erroooorrr : ${data.error} 🤯 🤯 🤯`,
        data.status
      );

    // if ( Array.isArray(results.data) && results.data.length === 0 ) {
    //     const message = `No se encontraron animes 😱 😱 😱 🤯 🤯 🤯`;
    //     throw new Error(message);
    // }

    return data;
  },
};
