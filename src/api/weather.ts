import axios from "axios"
// https://yikeapi.com/ 易客云

const weatherAPI = 'https://v0.yiketianqi.com/api?unescape=1&version=v61&appid=87292998&appsecret=r38QX66L'

export function weatherApi() {
    return axios({
        method: 'get',
        url: weatherAPI,
        params: {
            unescape: '1',
            version: 'v61',
            appid: '87292998',
            appsecret: 'r38QX66L'
        }
    });
}
