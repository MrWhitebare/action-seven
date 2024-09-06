import { makeAutoObservable,action} from "mobx";

export class UserStore{

    userName:string|null;

    role:string|null;

    constructor(){
        makeAutoObservable(this,
            {
                setUserInfo:action
            }
        );
        this.userName=null;
        this.role=null;
    }

    setUserInfo(userName:string|null,role:string|null){
        this.userName=userName;
        this.role=role;
    }

}

const userStore=new UserStore();

export default userStore;