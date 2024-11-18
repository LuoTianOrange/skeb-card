import axios from 'axios';
import image2uri from "image2uri";
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
    const data = response.data || {}
    const headerUrl = data?.header_url
    const headerImg = await image2uri(headerUrl, { ext: '.jpg' })
    const avatarUrl = data?.avatar_url
    const avatarImg = await image2uri(avatarUrl)
    const Logo = "https://fcdn.skeb.jp/assets/v1/commons/icon.svg"
    const logoImg = await image2uri(Logo, { ext: '.svg' })
    const creator = data?.creator
    const svg1 = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 400" width="280" height="400">
    <style>
    .container {
      fill: white;
      stroke: #e4e4e7;
      stroke-width: 1;
    }
    
    .header {
      fill: url(#headerImage);
    }
    
    .avatar {
      clip-path: circle(50%);
    }
    
    .text {
      font-family: Arial, sans-serif;
    }
    
    .title {
      font-size: 22px;
    }
    
    .subtitle {
      font-size: 16px;
    }
    
    .stats {
      font-size: 25px;
    }
    
    .label {
      font-size: 16px;
    }
    
    .divider {
      stroke: #e4e4e7;
      stroke-width: 1;
    }
    .logo{

    }
    </style>
    <defs>
    <pattern id="headerImage" patternUnits="userSpaceOnUse" width="280" height="160">
    <image href="${headerImg}" x="0" y="0" width="280" height="160" preserveAspectRatio="xMidYMid slice" />
    </pattern>
    </defs>
    <rect class="container" x="0" y="0" width="280" height="400" rx="10" ry="10" />
    <rect class="header" x="0" y="0" width="280" height="160" rx="10" ry="10" />
    <rect class="container" x="0" y="160" width="280" height="240" rx="10" ry="10"  />
    <image class="avatar" href="${avatarImg}" x="90" y="110" width="100" height="100" preserveAspectRatio="xMidYMid slice" />
    <image href="${logoImg}" class="logo" x="5" y="5" width="25" height="25" />
    <text class="text title" x="140" y="240" text-anchor="middle">${data?.name}</text>
    <text class="text subtitle" x="140" y="265" text-anchor="middle">${username}</text>
    <line x1="0" y1="300" x2="280" y2="300" class="divider" />
    <g transform="translate(70, 350)">
      <text class="text stats" x="0" y="0" text-anchor="middle">${data?.sent_public_works_count}</text>
      <text class="text label" x="0" y="20" text-anchor="middle">约稿数</text>
    </g>
    <g transform="translate(140, 350)">
      <text class="text stats" x="0" y="0" text-anchor="middle">${data?.received_works_count}</text>
      <text class="text label" x="0" y="20" text-anchor="middle">接稿数</text>
    </g>
    <g transform="translate(210, 350)">
      <text class="text stats" x="0" y="0" text-anchor="middle">${data?.acceptable ? '开放' : '关闭'}</text>
      <text class="text label" x="0" y="20" text-anchor="middle">请求状态</text>
    </g>
  </svg>
  `
    const svg2 = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 400" width="280" height="400">
    <style>
    .container {
      fill: white;
      stroke: #e4e4e7;
      stroke-width: 1;
    }
    
    .header {
      fill: url(#headerImage);
    }
    
    .avatar {
      clip-path: circle(50%);
    }
    
    .text {
      font-family: Arial, sans-serif;
    }
    
    .title {
      font-size: 22px;
    }
    
    .subtitle {
      font-size: 16px;
    }
    
    .stats {
      font-size: 25px;
    }
    
    .label {
      font-size: 16px;
    }
    
    .divider {
      stroke: #e4e4e7;
      stroke-width: 1;
    }
    .logo{

    }
    </style>
    <defs>
    <pattern id="headerImage" patternUnits="userSpaceOnUse" width="280" height="160">
    <image href="${headerImg}" x="0" y="0" width="280" height="160" preserveAspectRatio="xMidYMid slice" />
    </pattern>
    </defs>
    <rect class="container" x="0" y="0" width="280" height="400" rx="10" ry="10" />
    <rect class="header" x="0" y="0" width="280" height="160" />
    <rect class="container" x="0" y="160" width="280" height="240"  />
    <image class="avatar" href="${avatarImg}" x="90" y="110" width="100" height="100" preserveAspectRatio="xMidYMid slice" />
    <image href="${logoImg}" class="logo" x="5" y="5" width="25" height="25" />
    <text class="text title" x="140" y="240" text-anchor="middle">${data?.name}</text>
    <text class="text subtitle" x="140" y="265" text-anchor="middle">${username}</text>
    <line x1="0" y1="300" x2="280" y2="300" class="divider" />
    <g transform="translate(140, 350)">
      <text class="text stats" x="0" y="0" text-anchor="middle">${data?.sent_public_works_count}</text>
      <text class="text label" x="0" y="20" text-anchor="middle">约稿数</text>
    </g>
  </svg>
  `
    res.setHeader('Content-Type', 'image/svg+xml');
    if (creator) {
        res.send(svg1)
    }
    else if (!creator) {
        res.send(svg2)
    }

}

export default handler