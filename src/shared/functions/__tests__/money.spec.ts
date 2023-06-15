import { convertMoney } from "../money"


describe('Money', ()=>{

    it('Should retun the value with BRL currency', ()=>{
   
        const value = 32.96

        expect(convertMoney(value)).toContain('R$')
        expect(convertMoney(value)).toContain('32,96')
    })

    it('Should retun the value with decimal and . in thousand', ()=>{
   
        const value2 = 5050

        expect(convertMoney(value2)).toContain('R$')
        expect(convertMoney(value2)).toContain('5.050,00')
    })
})