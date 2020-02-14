import { request } from '../components/Utils';

export const Service = async (type, nextPage) => {
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

export const ServiceModal = async (url) => {
    const data = {
        method: "GET",
        headers: {
            Connection: "close",
            "content-type": "application/json",
            'Accept': 'application/json'
        }
    }
    return await request(`${url}`, data)
}