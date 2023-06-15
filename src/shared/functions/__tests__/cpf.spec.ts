import { CpfMask } from "../maskRegex"
import { validateCPF } from "../validations/validateCpf"

describe('CPF', ()=>{

    const validCPF = '15019718750'
        const invalidCPF = '12345678900'

    it('Should work as a mask for CPF', ()=> {
        const cpf = '12345678900'
        const cpfWithMask = '123.456.789-00'

        expect(cpfWithMask).toEqual(CpfMask(cpf))
    })

    it('Sould validate CPF form with 11 characters and sum equal 33, 44 or 55', ()=>{
        expect(true).toEqual(validateCPF(validCPF))
        expect(false).toEqual(validateCPF(invalidCPF))
    })

    it('Sould return false with cpf.lenght !== 11', ()=>{
        const bigCPF = '1501971875050'
        expect(false).toEqual(validateCPF(bigCPF))
    })

    it('Sould return repeated digits', ()=>{
        const repeatedCPF = '00000000000'
        expect(false).toEqual(validateCPF(repeatedCPF))
    })
})