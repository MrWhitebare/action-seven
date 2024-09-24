import axios from "axios";
import { message } from "antd";
import QueryString from "qs";

export type ApiResponse={
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

    let userInfo=localStorage.getItem("userInfo"),
        user=QueryString.parse(userInfo!);

    if(user.token){
        headers.set("Authorization",`Bearer ${user.token}`);
    }    

    if (isObject(data)) {
        Object.keys(data).forEach(key => {
            data[key] = isObject(data[key]) ? JSON.stringify(data[key]) : data[key]
        });
        request.data=QueryString.stringify(data);
    }

    return request;

});


axios.interceptors.response.use((response)=>{
    let {data} = response;
    const {code, data:result} =data;
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

const get=axios.get;

const post=axios.post;

export {get,post,axios};
