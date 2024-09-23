import React,{FC, Fragment, useEffect} from "react";
import { Button, Col, message, Modal, PaginationProps, Row, Table, TableProps, Form, FormProps, Input, Radio } from "antd";
import dayjs from "dayjs";
import {useLocalObservable,observer, Observer} from 'mobx-react';
import userService,{userInfo} from "@/services/userService";
import { DataType, pageInfo, UserState} from "./types";
import { PlusOutlined } from "@ant-design/icons";
import styles from './index.module.scss';

const format="YYYY-MM-DD HH:mm:SS";

const columns:TableProps<DataType>['columns']=[
    {
        title:"用户名",
        dataIndex:"nickname",
        key:"nickname",
    },
    {
        title:"平台",
        dataIndex:"platform",
        key:"platform",
    },
    {
        title:"手机号",
        dataIndex:"mobile",
        key:"mobile"
    },
    {
        title:"创建时间",
        dataIndex:"created_at",
        key:"created_at",
        render:(data:string)=>{
            return <Fragment>{dayjs(data).format(format)}</Fragment>
        }
    },
    {
        title:"更新时间",
        dataIndex:"updated_at",
        key:"updated_at",
        render:(data:string)=>{
            return <Fragment>{dayjs(data).format(format)}</Fragment>
        }
    }
];

const User:FC=observer(()=>{

    const store=useLocalObservable<UserState>(()=>({
       
        dataSource:[],

        current:1,

        pageSize:10,

        total:0,

        open:false,

        setData(list:DataType[],page:pageInfo) {
            this.dataSource=list.map(item=>({...item,key:item.id}));
            this.total=page.total;
            this.current=page.current;
            this.pageSize=page.pageSize;
        },

        setPageSize(current:number, size:number) {
            this.current=current;
            this.pageSize=size;
        },

        setCurrent(current:number) {
            this.current=current;
        },

        toggleShow(){
            this.open=!this.open;
        },

    }));

    const [form]=Form.useForm();

    useEffect(()=>{
        const {current,pageSize}=store;
        userService.getAllUsers(current,pageSize)
            .then((data:any)=>{
                const {rows,count}=data;
                store.setData(rows,{
                    total:count,
                    current,
                    pageSize
                });
            })
            .catch(e=>message.error("获取用户数据失败！",e))
    },[store.current,store.pageSize])

    const handleCreateUser=()=>{
        store.toggleShow();
    }

    const pagination:PaginationProps={
        showSizeChanger:true,
        onShowSizeChange:(current, size)=>{
            store.setPageSize(current,size);
        },
        current:store.current,
        pageSize:store.pageSize,
        total:store.total,
        onChange(page){
            store.setCurrent(page);
        }
    };

    const getCreateUserUI=()=>{

        const formProps:FormProps={
            labelCol:{span:4},
            wrapperCol:{span:14},
            layout:"horizontal",
            form,
            onFinish:(values:userInfo)=>{
                userService.createUser(values)
                .then((item)=>{
                    if(item){
                        message.success("创建用户成功！");
                    }
                })  
                .catch(e=>message.error("创建用户失败！"))
                .finally(()=>{
                    store.toggleShow();
                })
            }
        };

        const onCreateUserOk=()=>{
           form.submit();
        }

        const onCancel=()=>{
            store.toggleShow();
            form.resetFields();
        }

        return (<Observer>{()=>{
            const {open}=store;
            return (<Modal title={"创建用户"} 
                        open={open} 
                        onCancel={onCancel}
                        okText={"确认"} cancelText={"取消"}
                        onOk={onCreateUserOk}
                        >
                <Form {...formProps}>
                    <Form.Item label={"用户名"} name={"nickname"}
                        rules={[{required:true,message:"用户名为必填项"}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={"密码"} name={"password"} 
                        rules={[{required:true,message:"密码为必填项"}]}>
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item label={"平台"} name={"platform"}
                        rules={[{required:true,message:"平台为必填项"}]}>
                        <Radio.Group>
                            <Radio value={"xhs"}>小红书</Radio>
                            <Radio value={"weChat"}>微信</Radio>
                            <Radio value={"QQ"}>QQ</Radio>
                            <Radio value={"Bilibili"}>B站</Radio>
                            <Radio value={"alipay"}>支付宝</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label={"电话号码"} name={"moblie"}
                        rules={[{required:true,message:"电话为必填项"}]}
                        >
                        <Input/>
                    </Form.Item>
                </Form>
            </Modal>)
        }}</Observer>)
    }

    return (<div className={styles['user-container']}>
        <Row className={styles["header"]}>
            <Col span={5}>
                <Button type="primary" icon={<PlusOutlined/>} 
                    onClick={handleCreateUser}>创建用户</Button>
            </Col>
        </Row>
        <Table bordered className={styles['table-container']}
               columns={columns}
               dataSource={store.dataSource}
               pagination={pagination}/>
        {getCreateUserUI()}
    </div>)
})

export default User;