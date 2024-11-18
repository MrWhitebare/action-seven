import { Button, Checkbox, Form, FormProps, Input, message } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import QueryString from 'qs';
import { observer,inject } from 'mobx-react';
import { UserStore } from '@/store/userStore';
import userService from '@/services/userService';
import styles from './index.module.scss';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

interface  LoginProps{
  user?:UserStore
}

const Login: React.FC<LoginProps> =inject('user')(observer((props) => {

  const {user}=props;

  const navigate=useNavigate();

  const location=useLocation();

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    
    let pathName=location.pathname;
    if(pathName==="/login"){
      pathName="/preview";
    }
    
    if(values.username==="admin"&&values.password==="123456"){
      let info={
        ...values,
        token:"xxx"
      };
      localStorage.setItem('userInfo',QueryString.stringify(info));
      user?.setUserInfo("admin","administrator");
      navigate(pathName,{replace:true});
    }else{
      const {username,password}=values;
      userService.getAccessToken(username!,password!)
        .then((data:any)=>{
          const {token,info}=data;
          info.token=token;
          localStorage.setItem('userInfo',QueryString.stringify(info));
          user?.setUserInfo(username!,"administrator");
          navigate(pathName,{replace:true});
        })
        .catch(e=>message.error("登录失败"+e));
    }
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles["login-root"]}>
      <div className={styles.description}>That's one small step for a man, one giant leap for mankind.</div>
      <Form
        name="basic"
        className={styles.login}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>)

}))

export default Login;