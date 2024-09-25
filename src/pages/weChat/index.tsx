import React, { FC, Fragment, useEffect, useRef } from "react";
import { observer, inject, useLocalObservable } from "mobx-react";
import { ChatStore, msgItem } from "@/store/chatStore";
import { UserStore } from "@/store/userStore";
import { Avatar, Badge, Button, Divider, Empty, Input, message, Skeleton, Space } from "antd";
import userService from "@/services/userService";
import { WebSocketClient } from "@/utils/WebSocketClient";
import QueryString from "qs";
import dayjs from "dayjs";
import styles from './index.module.scss';
import { it } from "node:test";

interface WeChatUIProps {
    chat?: ChatStore,
    user?: UserStore,
}

export type DataType = {
    id: string;
    key: React.Key;
    nickname: string;
    platform: string;
    mobile: string;
    created_at: string;
    updated_at: string;
};

type WeChatUIState = {

    users: DataType[];

    loading: boolean;

    activeId: string | null;

    isActive: boolean;

    msgInfo: string | null;

    avatars: Record<string, string>;

    setUsers: (users: DataType[]) => void;

    getUserData: () => void;

    setActiveUser: (id: string) => void;

    setMsgInfo: (msg: string) => void;

}

const WeChatUI: FC<WeChatUIProps> = inject('chat', 'user')(observer((props) => {

    const { user, chat } = props;

    const store = useLocalObservable<WeChatUIState>(() => ({

        users: [],

        loading: false,

        activeId: null,

        msgInfo: null,

        avatars: {},

        get isActive() {
            return (typeof this.activeId === "string" && this.activeId !== "") && (typeof this.msgInfo === "string" && this.msgInfo !== "");
        },

        setUsers(users: DataType[]) {
            this.users = users;
        },

        getUserData() {
            this.loading = true;
            userService.getAllUsers()
                .then((data: any) => {
                    let { rows } = data,
                        users: DataType[] = [];
                    rows.forEach((item: DataType) => {
                        if (item.nickname !== user?.userName) {
                            users.push(item);
                        }
                        this.avatars[item.id] = item.nickname.substring(0, 1).toLocaleUpperCase();
                    })
                    this.users = users;
                })
                .catch(e => message.error("获取用户数据失败！" + e))
                .finally(() => this.loading = false);
        },

        setActiveUser(id: string) {
            this.activeId = id;
        },

        setMsgInfo(msg: string) {
            this.msgInfo = msg;
        },

    }));

    const wsRef=useRef<WebSocketClient>();

    useEffect(() => {
        store.getUserData();
        let userInfo = localStorage.getItem("userInfo");
        const curUser = QueryString.parse(userInfo || ""),
            body = {
                role: "sender",
                userId: curUser.id,
            };

        const ws = new WebSocketClient(`ws://localhost:5000/webSockets?${QueryString.stringify(body)}`);
        ws.connect();
        // 同原生方法
        ws.onclose(() => { });
        // 同原生方法
        ws.onerror(() => { });
        // 同原生方法
        ws.onmessage((msg:MessageEvent) => {
            const data=msg.data as string,
                [_,userId,userInfo]=data.split("|"),
                item=QueryString.parse(userInfo) as msgItem;
            chat?.addItem(userId,{...item,type:"reader"},store.activeId);    
        });
        // 同原生方法
        ws.onopen(() => { });
        
        wsRef.current=ws;

        return ()=>{
            ws.close();
        }

    }, [])

    const handleActive = (id: string) => {
        return () => {
            store.setActiveUser(id);
            chat?.setNotice(id);
        }
    }

    const handleSendMsg=()=>{
        const {msgInfo,activeId}=store;
        let item:msgItem={
            type:"sender",
            msg:msgInfo!,
            time:dayjs().format("YYYY-MM-DD HH:mm:ss"),
        };
        wsRef.current?.send(`message|${activeId}|${QueryString.stringify(item)}`);
        chat?.addItem(activeId!,item);
    }

    const getMsgListUI = () => {

        if (!store.activeId) return (<Fragment>
            <Divider>分割线</Divider>
            <Empty />
        </Fragment>);

        const { activeId } = store,
            msgList = chat?.getMsgList(activeId),
            avatar = user?.userName?.substring(0, 1).toLocaleUpperCase();

        return (msgList?.map((item, index) => {
            const { msg, time, type } = item;
            return (<div key={index + 1} className={styles["msg-item"]}>
                {type === "reader" && <div className={styles.reader}>
                    <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>{store.avatars[activeId]}</Avatar>
                    <div className={styles.msg}>
                        {msg}
                        <div className={styles.tip}>{time}</div>
                    </div>
                </div>}
                {type === "sender" && <div className={styles.sender}>
                    <div className={styles.msg}>
                        {msg}
                        <div className={styles.tip}>{time}</div>
                    </div>
                    <Avatar style={{ backgroundColor: '#bfc', color: '#f56a00' }}>{avatar}</Avatar>
                </div>}
            </div>)
        }))

    }

    return (<div className={styles["we-chat-ui"]}>
        <div className={styles.left}>
            <Skeleton active loading={store.loading}>
                {store.users.map((item, index) => (
                    <div className={`${styles["user-item"]} ${store.activeId === item.id && styles.active}`}
                        key={item.id}
                        onClick={handleActive(item.id)}>
                        <Badge count={chat?.getNotice(item.id)} overflowCount={999}>
                            <Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index + 1}`} />
                        </Badge>
                        <div>{item.nickname}</div>
                    </div>))}
            </Skeleton>
        </div>
        <Divider className={styles.divider} type={"vertical"} dashed variant={"dotted"} />
        <div className={styles.right}>
            <div className={styles["msg-container"]}>
                {getMsgListUI()}
            </div>
            <Space.Compact className={styles["send-msg"]}>
                <Input placeholder={"请输入消息"}
                    disabled={!store.activeId}
                    onChange={e => store.setMsgInfo(e.target.value)} />
                <Button className={styles.btn} 
                    type={"primary"} 
                    disabled={!store.isActive}
                    onClick={handleSendMsg}
                    htmlType={"submit"}
                    >发送</Button>
            </Space.Compact>
        </div>
    </div>)

}))


export default WeChatUI;