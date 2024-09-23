export type DataType={
    id:string;
    key:React.Key;
    nickname:string;
    platform:string;
    mobile:string;
    created_at:string;
    updated_at:string;
};

export type pageInfo={
    current:number;
    pageSize:number;
    total:number;
};

export type UserState={
    dataSource:DataType[];
    current:number;
    pageSize:number;
    total:number;
    open:boolean;
    setData:(list:DataType[],page:pageInfo)=>void;
    setPageSize:(current:number,size:current)=>void;
    setCurrent:(current:number)=>void;
    toggleShow:()=>void;
};