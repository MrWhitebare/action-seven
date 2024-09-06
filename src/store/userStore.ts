import { makeAutoObservable } from "mobx";

export class UserStore{

    userName:string|null;

    role:string|null;

    constructor(){
        makeAutoObservable(this);
        this.userName=null;
        this.role=null;
    }

    setUserName(userName:string|null){
        this.userName=userName;
    }

    setRoleName(role:string|null){
        this.role=role;
    }

}

const userStore=new UserStore();

export default userStore;