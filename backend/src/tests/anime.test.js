
const { animeByName } = require("../models/anime");
const { createSearch } = require("../services/anime");
const { response, rightResponse } = require("./apiMockfile");

jest.mock("../models/anime");

describe('Test over anime route', () => { 
    test('Should return error if name is "undefined"', () => { 
        const name = undefined;
        const page = 1;
        const result = async()=>{
            await createSearch(name , page);
        }
        expect(result).rejects.toThrow("Ocurrio un erroooorrr : Se debe agregar una busqueda");
     });
     test('Should return well constructed object', async() => { 
        animeByName.mockReturnValue(response);

        const name = "naruto";
        const page = 1;
        const result = await createSearch(name , page);
        expect(result).toEqual(rightResponse)
     });
     test('Average should be correct', async() => { 
        animeByName.mockReturnValue(response);

        const name = "naruto";
        const page = 1;
        const result = await createSearch(name , page);
        expect(result).toEqual(rightResponse)
     });
     
 })