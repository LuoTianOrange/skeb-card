import axios from 'axios';
const skebApi = axios.create({
    baseURL: 'https://skeb.jp/api',
    headers: {
        'authority': 'skeb.jp',
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Microsoft Edge";v="99"',
        'accept': 'application/json, text/plain, */*',
        'dnt': '1',
        'authorization': 'Bearer null',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36 Edg/99.0.1150.46',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://skeb.jp/',
        'accept-language': 'zh-CN,zh;q=0.9',
    }
});
const handler = async (req, res) => {
    const { username } = req.query
    const response = await skebApi.get(`/users/${username.trim().replace('@', '')}`)
    res.status(200).json(response.data)
}

export default handler