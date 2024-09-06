import {  FC, useState } from 'react'
import { Avatar, Button, Layout, Menu, Popconfirm } from 'antd'
import {
  AndroidOutlined,
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PictureOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Navigate, useNavigate ,Outlet} from 'react-router-dom';
import {observer,inject} from 'mobx-react';
import { UserStore } from '@/store/userStore';
import styles from './index.module.scss';

const { Header, Sider, Content } = Layout;

interface HomeProps{
  user?:UserStore
}

const Home:FC<HomeProps>=inject('user')(observer((props)=>{

  const {user}=props;

  const [collapsed, setCollapsed] = useState(false);
  const navigate=useNavigate();

  let userInfo = localStorage.getItem("userInfo");

  if (!userInfo) {
    return (<Navigate to={'/login'} replace={true} />)
  }else{
    user?.setRoleName("admin");
    user?.setUserName("admin");
  }

  const quitSystem=()=>{
    if(userInfo){
      user?.setRoleName(null);
      user?.setUserName(null);
      localStorage.clear();
      navigate('/login',{replace:true});
    }
  }

  const menuChange=(info:any)=>{
    navigate(info.key);
  }

  return (
    <Layout className={styles.layout}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Avatar className={styles.avatar} icon={<AndroidOutlined />} />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['nav1']}
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
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header className={styles.header}>
          <Button
            className={styles['btn-expand']}
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
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