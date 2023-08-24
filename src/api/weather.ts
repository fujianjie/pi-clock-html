import axios from "axios"
// https://yikeapi.com/ 易客云

const weatherAPI = 'https://v0.yiketianqi.com/api?unescape=1&version=v61&appid=84241347&appsecret=nWT5wMWQ'

export function weatherApi() {
    return axios({
        method: 'get',
        url: weatherAPI,
        params: {
            unescape: '1',
            version: 'v61',
            appid: '84241347',
            appsecret: 'nWT5wMWQ'
        }
    });
}
