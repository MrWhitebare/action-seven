import {  useState } from 'react'
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
import styles from './index.module.scss';
import { Navigate, useNavigate ,Outlet} from 'react-router-dom';

const { Header, Sider, Content } = Layout;

function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate=useNavigate();

  let userInfo = localStorage.getItem("userInfo");
  if (!userInfo) {
    return (<Navigate to={'/login'} replace={true} />)
  }

  const quitSystem=()=>{
    if(userInfo){
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
              key: 'nav2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: 'nav3',
              icon: <UploadOutlined />,
              label: 'nav 3',
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
}

export default Home;