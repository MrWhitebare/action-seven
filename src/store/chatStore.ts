import { message } from "antd";
import { makeAutoObservable,action } from "mobx";


export type msgItem={
    msg:string;
    type:"sender"|"reader";
    time:string;
}

const vite='/vite.svg';

export class ChatStore{

    records:Record<string,msgItem[]>;

    notices:Record<string,number>;

    constructor(){
        makeAutoObservable(this,
            {
                addItem:action,
                setNotice:action,
            }
        )
        this.records={};
        this.notices={};
        this.initNotification();
    }

    initNotification(){
        if(Notification.permission!=="granted"){
            Notification.requestPermission()
                .then(permission=>{
                    if(permission==="granted"){
                        message.success("通知权限已授权");
                    }else{
                        message.error("通知权限被拒");
                    }
                })
        }
    }

    addItem=(userId:string,item:msgItem,activeId?:string|null)=>{
        if(!userId) return;
        if(!Array.isArray(this.records[userId])){
            this.records[userId]=[];
        }
        if(!this.notices[userId]){
            this.notices[userId]=0;
        }
        this.records[userId].push(item);
        if(item.type==="reader"){
            if(userId!==activeId){
                this.notices[userId]++;
            }
            this.showNotification(userId,item.msg);
        }
        
    }

    getMsgList=(userId:string)=>{
        return this.records[userId];
    }

    getNotice(userId:string){
        return this.notices[userId];
    }

    setNotice(userId:string){
        this.notices[userId]=0;
    }

    showNotification(title:string,body:string){
        if(Notification.permission==="granted"){
            const notification=new Notification(title,{
                body,
                icon:vite,
            });
        }else{
            message.error("通知权限未授予");
        }
    }

}

const chatStore=new ChatStore();

export default chatStore;