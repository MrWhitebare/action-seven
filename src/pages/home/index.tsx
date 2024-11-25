import {  FC, useEffect } from 'react'
import { Avatar, Button, Layout, Menu, Popconfirm } from 'antd'
import {
  AndroidOutlined,
  CalculatorFilled,
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  NumberOutlined,
  PictureOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import { Navigate, useNavigate ,Outlet, useLocation} from 'react-router-dom';
import {observer,inject,useLocalObservable} from 'mobx-react';
import { UserStore } from '@/store/userStore';
import QueryString from 'qs';
import styles from './index.module.scss';

const { Header, Sider, Content } = Layout;

interface HomeProps{
  user?:UserStore
}

const Home:FC<HomeProps>=inject('user')(observer((props)=>{

  const {user}=props;

  const location=useLocation();

  const store=useLocalObservable(()=>({

    collapsed:false,

    setCollapsed(collapsed:boolean){
      this.collapsed=collapsed;
    },

    menubar:"preview",

    setMenubar(menubar:string){
      this.menubar=menubar;
    }

  }));

  useEffect(()=>{
    if(location){
      store.setMenubar(location.pathname.replace("/",""));
    }
  },[])

  const navigate=useNavigate();

  let userInfo = localStorage.getItem("userInfo");

  if (!userInfo) {
    return (<Navigate to={'/login'} replace={true} />)
  }else{
    const curUser=QueryString.parse(userInfo);
    user?.setUserInfo(curUser.nickname as string,"administrator");
  }

  const quitSystem=()=>{
    if(userInfo){
      user?.setUserInfo(null,null);
      localStorage.clear();
      navigate('/login',{replace:true});
    }
  }

  const menuChange=(info:any)=>{
    store.setMenubar(info.key);
    navigate(info.key);
  }

  const {collapsed,menubar}=store

  return (
    <Layout className={styles.layout}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Avatar className={styles.avatar} icon={<AndroidOutlined />} />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[menubar]}
          onClick={menuChange}
          items={[
            {
              key: 'preview',
              icon: <PictureOutlined />,
              label: '图片预览',
            },
            {
              key: 'region',
              icon: <VideoCameraOutlined />,
              label: '区域权限',
            },
            {
              key: 'webrtc',
              icon: <UploadOutlined />,
              label: 'WebRtc',
            },
            {
              key:"dashboard",
              icon: <DashboardOutlined />,
              label:"看板"
            },
            {
              key:"game",
              icon:<NumberOutlined/>,
              label:"游戏"
            },
            {
              key:"user",
              icon:<UserOutlined/>,
              label:"用户"
            },
            {
              key:"weChat",
              icon:<WechatOutlined/>,
              label:"聊天"
            },
            {
              key:"doubleEleven",
              icon:<CalculatorFilled/>,
              label:"双十一满减"
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header className={styles.header}>
          <Button
            className={styles['btn-expand']}
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => store.setCollapsed(!collapsed)}
          />
          <div className={styles.info}>欢迎您 {user?.userName}!</div>
          <div className={styles.avatar}>
            <Popconfirm title="是否退出系统？" onConfirm={quitSystem}>
              <Avatar size={"large"} 
                style={{ backgroundColor: '#87d068' }}
                icon={<UserOutlined />} />
              </Popconfirm>
          </div>  
        </Header>
        <Content
          className={styles.content}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>)
}))

export default Home;