import axios from "axios";
import Qs from 'querystring';
import { message } from "antd";

export type Response={
    code:number;
    data:{};
    message:string;
}

axios.defaults.baseURL = "/koa";
axios.defaults.withCredentials = true;
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';

const isObject = (obj:Record<string,any>) =>{
    return obj && (typeof obj === 'object') && !(obj instanceof FormData);
}

axios.interceptors.request.use((request)=>{
    
    const {headers,data}=request;

    headers.set("platform","pc");

    if (isObject(data)) {
        Object.keys(data).forEach(key => {
            data[key] = isObject(data[key]) ? JSON.stringify(data[key]) : data[key]
        });
        Qs.stringify(data);
    }

    return request;

});

axios.interceptors.response.use((response)=>{
    const {data} = response,
        {code, data:result} = data || {};
    switch(code){
        case 200:
            return result;
        case -1:
        case 1:
        case 3:
        case 4:       
            message.error(data.message);
            break;
        default:
            //抛出错误消息
            throw new Error(data.message);         
    }
})

export {};