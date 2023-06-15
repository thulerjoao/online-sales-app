import { validateEmail } from "../validations/validateEmail"

describe('Email test', ()=>{
    
    it('should return false with an email unlike ____@___.__', ()=>{
        const wrongEmail1 = 'email@emailcom'
        const wrongEmail2 = 'emailemail.com'
        const wrongEmail3 = 'emailemailcom'

        expect(false).toEqual(validateEmail(wrongEmail1))
        expect(false).toEqual(validateEmail(wrongEmail2))
        expect(false).toEqual(validateEmail(wrongEmail3))
    })

    it('should return true with email like ____@___.__', ()=>{
        const rightEmail = 'email@email.com'

        expect(true).toEqual(validateEmail(rightEmail))
    })
})