import { makeAutoObservable,action } from "mobx";

export type msgItem={
    msg:string;
    type:"sender"|"reader";
    time:string;
    loaded?:boolean;
}

export class ChatStore{

    records:Record<string,msgItem[]>;

    constructor(){
        makeAutoObservable(this,
            {
                addItem:action,
            }
        )
        this.records={};
    }

    addItem=(userId:string,item:msgItem)=>{
        if(!userId) return;
        if(!Array.isArray(this.records[userId])){
            this.records[userId]=[];
        }
        this.records[userId].push(item);
    }

    getMsgList=(userId:string)=>{
        return this.records[userId];
    }

}

const chatStore=new ChatStore();

export default chatStore;