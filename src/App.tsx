import React from 'react'
import { ConfigProvider } from 'antd'
import { Route, Routes } from 'react-router-dom'
import NotFound from '@/pages/404'
import Region from '@/pages/region'
import Content from '@/componets/content'


const Login = React.lazy(()=>import('@/pages/login'));
const Home = React.lazy(()=>import('@/pages/home'));
const WebRtcUI =React.lazy(()=>import('@/pages/webrtc'));
const Dashboard = React.lazy(()=>import('@/pages/dashboard'));

function App() {

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
          borderRadius: 2,
          colorBgContainer: "#f6ffed"
        }
      }}>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}>
          <Route path='/preview' element={<Content/>}/>
          <Route path='/region' element={<Region/>}/>
          <Route path='/webrtc' element={<WebRtcUI/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </ConfigProvider>)
}

export default App
