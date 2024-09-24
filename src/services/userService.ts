import {axios} from './AxiosCommonPlugin';

export type userInfo={
    nickName:string;
    password?:string;
    mobile:string;
    platform:string;
};

const userService={

    basePath:"/game/user",

    getAllUsers(page=1,pageSize=10){
        let url=this.basePath+"/getAllUsers";
        return axios.post(url,{page,pageSize});
    },

    createUser(options:userInfo){
        let content={
                ...options
            },
            url=this.basePath+"/create";
        return axios.post(url,content);    
    },  

    getAccessToken(nickname:string,password:string){
        let content={
            nickname,
            password
        }
        return axios.post("/game/getAccessToken",content);
    },
};

export default userService;