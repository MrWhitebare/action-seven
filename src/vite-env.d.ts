/// <reference types="vite/client" />

export interface FileManageResponse<T>{
    code:number;
    message:string;
    result:T,
    status:boolean,
    time:Date
}
