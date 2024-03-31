// import httpProxy from 'http-proxy';
// import Cookies from 'cookies';
// import {URL} from 'url'
// import { NextRequest } from 'next/server';
// import { NextApiRequest, NextApiResponse } from 'next';

// const API_URL = "localhost:3001";


// const proxy = httpProxy.createProxyServer();

// export const config = {
// 	api: {
// 		bodyParser: false,
// 	},
// }

// export default (req:NextApiRequest,res:NextApiResponse)=>new Promise(
//     (resolve,reject)=>{
//         if (req.url){
//             const pathname = new URL(req.url).pathname
//             req.url = req.url.replace(/^\/api/, '')
//             proxy.web(req, res, {
//                 target: API_URL,
//                 autoRewrite: false,

//                 selfHandleResponse: true,
//             })
//         }


//     }
// )