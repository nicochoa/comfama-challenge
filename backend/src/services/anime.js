const { animeByName } = require("../models/anime");
const { createError } = require("../errors/anime.js")
const cache = new Map();

const cacheSearch = async ( name,  ) => {
  let results = await animeByName(name);
  let scoresSum = 0;
  let animeList = [];
  let pageNum = 1;

  for (let i = 0; i < results.pagination.last_visible_page; i++) {
    results.data.forEach((ele) => {
      scoresSum += ele.score;
      animeList.push({
        title: ele.title,
        image: ele.images.jpg.image_url,
        score: ele.score,
        recomendation: turnToRecomendation(ele.score),
      });
    });
    pageNum += 1;
    results = await animeByName(name, pageNum);
  }

  let average = scoresSum / results.pagination.items.total;

  cache.set(name , {
    averageScore: average,
    resultsList: animeList,
  });
}

const turnToRecomendation = (score)=>{
    if (score < 5) {
        return "I do not recommend it."
    }
    if (score >= 5 && score < 8) {
        return "You may have fun."
    }
    if (score > 8 ) {
        return "Great, this is one of the best anime."
    }
}

const prepareData = (name , page) => {
  let response = {
    page: page,
    searched: name,
    averageScore: cache.get(name).averageScore,
    resultsList: resultsResponse(page , cache.get(name).resultsList),
  };
  return response;
};

const resultsResponse = (page , resultsList) => {
  let startIndex = 25 * ( page - 1 );
  let endIndex = 25 * page;

  if (endIndex > resultsList.length) {
    return resultsList.slice(startIndex);
  }
  return resultsList.slice( startIndex , endIndex );
}

module.exports = {
  createSearch: async (name, page) => {

      if (name == undefined) {createError(`Ocurrio un erroooorrr : Se debe agregar una busqueda`, 400);}

      if (cache.has(name)){
        return prepareData(name , page);
      }

      await cacheSearch(name , page)
      return prepareData(name , page)
  },
};
