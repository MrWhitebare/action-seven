/// <reference types="vite/client" />

export interface FileManageResponse<T>{
    code:number;
    message:string;
    result:T,
    status:boolean,
    time:Date
}

export interface DataServerResponse<T>{
    code:number;
    message:number;
    cose:number;
    status:boolean;
    result:{
        config:{};
        data:T;
        total:number;
    }
}
