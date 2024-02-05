const { createSearch } = require("../services/anime")

module.exports ={
    respondSearchResult: async (req, res) =>{
        try {
            let name = req.params.name;
            let page = req.query.pageId;
            let results = await createSearch(name , page);
            res.send(results);
        } catch (error) {
            console.error(error);
            res.status(error.code).send(error.message);  
        }
    }
}