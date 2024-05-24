import { CSSProperties, Fragment, ReactNode, useState } from 'react'
import { Button, message,Image, Empty, Divider, Skeleton } from 'antd';
import queryString from 'qs';
import { produce } from 'immer';
import { FileManageResponse } from '../../vite-env';
import styles from './index.module.scss';

interface ContentProps {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}

type fileItem={
    id:string;
    mimeType:string;
    createTime:string;
    name:string;
    orgId:number;
    sign:string;
    size:number;
    url?:string;
    userId:string;
  };

interface dictionary{
    [key:string]:string;
}

const Content: React.FC<ContentProps> = (props: ContentProps) => {

    const { className } = props;

    const [loading,setLoading]=useState<boolean>(false);

    const [urls,setUrls] = useState<string[]>([]);

    const ids:string[]=['1793539720391692290','1793540082603397122','1793540895073636354','1793540650273083394','1793562112795086850','1793562262242332673'];

    const getUrl=(type:string)=>{
        return `/api/data-support/filemanage/file/${type}`;
    }

    const loadingResource=()=>{

        const params=queryString.stringify({
            ids:ids.join(','),
            orgId:737
        });

        let msgUrl=getUrl("listFileByIds")+`?${params}`,
            pathUrl=getUrl("getFilePath")+`?${params}`;

        let p0=fetch(msgUrl)
                .then(res=>res.json())
                .then(values=>values),
            p1=fetch(pathUrl)
                .then(res=>res.json())
                .then(values=>values);
        
        setLoading(true);
        Promise.all([p0,p1])
            .then(([infos,urls]:[FileManageResponse<fileItem[]>,FileManageResponse<dictionary>])=>{
                let keys=Object.keys(urls.result);
                infos.result.forEach(item=>{
                    if(keys.includes(item.id)){
                        item.url=urls.result[item.id];
                    }
                })
                setUrls(previews=>produce(previews,(draft)=>{
                    let urls=infos.result.map(i=>i.url!);
                    draft.push(...urls);
                }))
            })
            .catch(e=>message.error(e))
            .finally(()=>{
                setLoading(false);
            })        

    }

    const onChange= (current:number, prev:number) =>{
        console.log(`current index: ${current}, prev index: ${prev}`);
    }

    return (<div className={`${className} ${styles.content}`}>
        <Button type="primary" onClick={loadingResource}>图片加载</Button>
        <Divider>图片</Divider>
        <Image.PreviewGroup preview={
            {onChange}
        }>
            <Skeleton active loading={loading} round={true} avatar={true}>
                {urls.length>0?urls.map((url,index)=>{
                    return (<Fragment key={"pic"+index}>
                        <Image src={url} className={styles['img-item']}/>
                    </Fragment>)
                }):
                <Empty/>}
            </Skeleton>
        </Image.PreviewGroup>
    </div>)

}

export default Content;