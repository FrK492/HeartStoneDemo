import axios from 'axios'

export const client = axios.create({
    baseURL: 'https://omgvamp-hearthstone-v1.p.rapidapi.com',
    headers: {
        'x-rapidapi-key': '140779ea72mshaba01d1130f618cp15fb26jsn89ee947391db',
        'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    },
    timeout: 60000,
})