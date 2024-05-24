import { Button, Result } from "antd"
import styles from './index.module.scss';
import { useLocation, useNavigate } from "react-router-dom";

const NotFound:React.FC=()=>{

    const navigate=useNavigate();

    const backHome=()=>{
        navigate('/',{replace:true});
    }

    return (
        <Result 
            className={styles['not-found']}
            status={"404"} 
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={backHome}>Back Home</Button>}
          />
    )

}

export default NotFound;