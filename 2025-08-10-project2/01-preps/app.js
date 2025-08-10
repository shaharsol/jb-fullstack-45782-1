"use strict";

(async () => {

    const API_KEY = '33d40ab1a03f8b468f1646c3516f6b62bc0a8bda1e3dc1d4923646e915a50763'
    const CACHE_AGE_IN_SECONDS = 30

    const getData = async (url, apiKey) => {
        let data = localStorage.getItem(url)
        if (data) {
            data = JSON.parse(data)
            const { createdAt } = data
            console.log(new Date(createdAt).getTime() + CACHE_AGE_IN_SECONDS * 1000)
            console.log(new Date())
            // if (new Date().getTime() - CACHE_AGE_IN_SECONDS * 1000) < (new Date(createdAt).getTime()) {
            if ((new Date(createdAt).getTime() + CACHE_AGE_IN_SECONDS * 1000) > new Date().getTime()) {
                console.log('cache hit')
                return data
            }
        }
        data = await fetch(url, { headers: { Authorization: `Bearer ${apiKey}` } }).then(response => response.json())
        localStorage.setItem(url, JSON.stringify({ data: JSON.stringify(data), createdAt: new Date() }))
        console.log('cache miss')
        console.log(data)
        return data
    }
    try {
        const tokens = await getData('https://rest.coincap.io/v3/assets', API_KEY)
        console.log(tokens)

    } catch (e) {
        console.log(e)
    }

})()