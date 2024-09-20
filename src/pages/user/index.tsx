import React,{FC, useEffect} from "react";
import axios from "axios";
import styles from './index.module.scss';

const User:FC=()=>{

    useEffect(()=>{
        axios.post("/game/user/getAllUsers")
        .then(data=>{
            console.log(data);
        })
    },[])

    return (<div className={styles['user-container']}>
        用户
    </div>)

}

export default User;