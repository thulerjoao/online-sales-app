import { PhoneMask } from "../maskRegex"
import { validatePhoneNumber } from "../validations/validatePhone"


describe('Phone', ()=>{

    it('Should aply mask in phone', ()=>{
        const phone1 = '22999999999'
        const phone2 = '(22) 99999-9999'

        expect(phone2).toEqual(PhoneMask(phone1))

        const phone3 = '2225252525'
        const phone4 = '(22) 2525-2525'

        expect(phone4).toEqual(PhoneMask(phone3))

    })

    it('Should return false if phone without ddd  !== 9 or 8 digits ', ()=>{
        const wrongPhone7 = '551234567'
        const wrongPhone10 = '551234567890'

        expect(false).toEqual(validatePhoneNumber(wrongPhone7))
        expect(false).toEqual(validatePhoneNumber(wrongPhone10))

    })

    it('Should return true if phone without ddd == 9 or 8 digits ', ()=>{
        const rightPhone8 = '5512345678'
        const rightPhone10 = '55123456789'

        expect(false).toEqual(validatePhoneNumber(rightPhone8))
        expect(false).toEqual(validatePhoneNumber(rightPhone10))

    })
})