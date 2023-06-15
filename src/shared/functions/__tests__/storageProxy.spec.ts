import { setItemStorage, getItemStorage, removeItemStorage } from "../storageProxy"
import AsyncStorage from '@react-native-async-storage/async-storage';

const mockReturn = 'abc'
const mockkey = 'key'

jest.mock('@react-native-async-storage/async-storage', ()=>({
    setItem: jest.fn(()=> Promise.resolve()),
    getItem: jest.fn(()=> Promise.resolve(mockReturn)),
    removeItem: jest.fn(()=> Promise.resolve()),
}))


describe('StrorageProxy', ()=>{

    it('Should set item in storage', ()=>{
        setItemStorage(mockkey, mockReturn)

        expect(AsyncStorage.setItem).toBeCalledWith(mockkey, mockReturn)
    })

    it('Should get item from storage', async ()=>{
        const returnProcy = await getItemStorage(mockkey)

        expect(AsyncStorage.getItem).toBeCalledWith(mockkey)
        expect(mockReturn).toEqual(returnProcy)
    })

    it('Should remove item in storage', ()=>{
        removeItemStorage(mockkey)

        expect(AsyncStorage.removeItem).toBeCalledWith(mockkey)
    })


})