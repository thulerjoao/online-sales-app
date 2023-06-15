import { removeSpecialCharacters } from "../caracters"

describe('Characters',()=>{

    it('Should remove characters and let only numbers', ()=>{
        const spacialCharacters = '456.husao/5dsa,duis|ajoi\dsa8'
        const cleanText = '45658'

        expect(cleanText).toEqual(removeSpecialCharacters(spacialCharacters))
    })
})