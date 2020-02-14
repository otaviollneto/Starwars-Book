import { request } from '../components/Utils';

export const Service = async (type, nextPage) => {
    console.log(type, nextPage)
    console.log(`https://swapi.co/api/${type}/${(nextPage > 0)?`?page=${nextPage}`:''}`)
    const data = {
        method: "GET",
        headers: {
            Connection: "close",
            "content-type": "application/json",
            'Accept': 'application/json'
        }
    }
    return await request(`https://swapi.co/api/${type}/${(nextPage > 0)?`?page=${nextPage}`:''}`, data)
}