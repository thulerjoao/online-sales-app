import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { cartURL } from '../apiUrl';
import { ConnectionApiDelete, ConnectionApiGet, ConnectionApiPatch, ConnectionApiPost, ConnectionApiPut } from '../connectionApi';

const mockAxios = new MockAdapter(axios);
const mockReturnValue = 'mockReturnValue';
const mockToken = 'uidsha546dasuio45';
const mockBody = { name: 'test'}

jest.mock('../auth', () => ({
  getAuthorizatedToken: () => mockToken,
}));

describe('Api connection', () => {

  describe('APi Get', () => {
    it('Should success get', async () => {
      const spyAxios = jest.spyOn(axios, 'get');
      mockAxios.onGet(cartURL).reply(200, mockReturnValue);

      const returnGet = await ConnectionApiGet(cartURL);

      expect(returnGet).toEqual(mockReturnValue);
      expect(spyAxios.mock.calls[0][0]).toEqual(cartURL);
    });
  });

  describe('Api delete', ()=>{

    it('Should success delete', async ()=> {
        const spyAxios = jest.spyOn(axios, 'delete');
        mockAxios.onDelete(cartURL).reply(200, mockReturnValue);

        const returnDelete = await ConnectionApiDelete(cartURL);

        expect(returnDelete).toEqual(mockReturnValue);
        expect(spyAxios.mock.calls[0][0]).toEqual(cartURL);


    })
  })

  describe('Api post', ()=>{

    it('Should success post', async ()=> {
        const spyAxios = jest.spyOn(axios, 'post');
        mockAxios.onPost(cartURL).reply(200, mockReturnValue);

        const returnPost = await ConnectionApiPost(cartURL, mockBody);

        expect(returnPost).toEqual(mockReturnValue);
        expect(spyAxios.mock.calls[0][0]).toEqual(cartURL);
        expect(spyAxios.mock.calls[0][1]).toEqual(mockBody);
    })
  })

  describe('Api put', ()=>{

    it('Should success put', async ()=> {
        const spyAxios = jest.spyOn(axios, 'put');
        mockAxios.onPut(cartURL).reply(200, mockReturnValue);

        const returnPut = await ConnectionApiPut(cartURL, mockBody);

        expect(returnPut).toEqual(mockReturnValue);
        expect(spyAxios.mock.calls[0][0]).toEqual(cartURL);
        expect(spyAxios.mock.calls[0][1]).toEqual(mockBody);
    })
  })

  describe('Api patch', ()=>{

    it('Should success patch', async ()=> {
        const spyAxios = jest.spyOn(axios, 'patch');
        mockAxios.onPatch(cartURL).reply(200, mockReturnValue);

        const returnPatch = await ConnectionApiPatch(cartURL, mockBody);

        expect(returnPatch).toEqual(mockReturnValue);
        expect(spyAxios.mock.calls[0][0]).toEqual(cartURL);
        expect(spyAxios.mock.calls[0][1]).toEqual(mockBody);
    })
  })
});
