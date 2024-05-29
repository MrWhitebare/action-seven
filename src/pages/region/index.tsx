import React, { useEffect, useState } from "react";
import { DataServerResponse } from "@/vite-env";
import {TreeSelect, TreeSelectProps} from 'antd';
import styles from './index.module.scss';

const {SHOW_PARENT}=TreeSelect;

type treeItem={
    title:string;
    value:string|number;
    key:string;
    children?:treeItem[]
};

type regionItem={
    geoq_featureid:string;
    level:number;
    address:string;
    prov_name:string;
    prov_code:string;
    city_name:string;
    city_code:string;
    coun_name:string;
    code:string;
    id:string;
    parentId:string|null;
    children?:regionItem[];
};

const Region:React.FC=()=>{

    const [options,setOptions]=useState<treeItem[]>([]);

    const buildTree=(data:regionItem[])=>{
        let result:regionItem[]=[];
        for(const item of data){
            if(item.parentId===null){
                result.push(item)
            }
            for(const subItem of data){
                if(subItem.parentId===item.id){
                    if(!item.children){
                        item.children=[];
                    }
                    item.children.push(subItem);
                }
            }
        }
        return result;
    }

    const buildTree2=(data:regionItem[]):treeItem[]=>{
        let result:treeItem[]=[];
        for(let item of data){
            if(item.parentId===null){
                let parent:treeItem={
                    key:item.geoq_featureid,
                    title:item.address,
                    value:item.id,
                };
                parent.children=getChildNode(item.id,data);
                result.push(parent)
            }
        }
        return result;
    }

    const getChildNode=(id:string,data:regionItem[]):treeItem[]=>{
        const children:treeItem[]=[];
        for(let item of data){
            if(item.parentId===id){
                children.push({
                    key:item.geoq_featureid,
                    title:item.address,
                    value:item.id,
                });
            }
        }
        //性能优化不在查找已经找到的节点 否则会引起递归超栈
        children.forEach(item=>{
            let index=data.findIndex(it=>it.id===item.value);
            data.splice(index,1);
        })
        for(let child of children){
            const items=getChildNode(child.value.toString(),data);
            if(items&&items.length>0){
                child.children=items;
            }
        }
        return children;
    }

    useEffect(()=>{
        let url="/data/data-search/rest/services/dataservice/data/search";
        let fields=["geoq_featureid","prov_name","prov_code","city_name","city_code","coun_name","code","level","address"].map(field=>({value:field,alias:field}));


        const params=new URLSearchParams();
        params.append("tableId",'"org"."public"."938d3e37-9ee7-4463-ab10-d0bef1eb2b55"');
        params.append("f","json_geogeometry");
        params.append("fields",JSON.stringify(fields));
        params.append("where",`(level in (2,3,4) and prov_code not in ('110000','120000','310000','500000','710000','810000','820000') ) 
                        or (level=2 and prov_code in ('110000','120000','310000','500000'))`);
        fetch(url,{
            method:"POST",
            body:params,
        })
            .then(data=>data.json())
            .then((res:DataServerResponse<regionItem[]>)=>{
                let regionItems:regionItem[]=res.result.data;
                regionItems.splice(0,0,{
                    coun_name:"",
                    city_name:"",
                    code:"860000",
                    address:"中华人民共和国",
                    geoq_featureid:"88a770b0-f9db-41af-8779-5a26e6a7efc5",
                    prov_name:"",
                    level:1,
                    city_code:"",
                    prov_code:"",
                    parentId:null,
                    id:"all"
                });
                regionItems.forEach(item=>{
                    switch(item.level){
                        case 1:
                            item.parentId=null;
                            item.id="all";
                            break;
                        case 2:
                            item.parentId="all";
                            item.id=item.prov_code;
                            break;
                        case 3:
                            item.parentId=item.prov_code;
                            item.id=item.city_code;       
                            break;    
                        case 4:
                            item.parentId=item.city_code;
                            item.id=item.code;
                            break;    
                    }
                })
                // let tree=buildTree(regionItems);
                let tree2=buildTree2(regionItems);
                setOptions(tree2);
            })
            .catch(e=>console.log("获取数据错误！",e))
    
    },[])

    const onChange=(newValues:string[])=>{
        console.log(newValues);
    }

    const tProps:TreeSelectProps={
        className:styles.selector,
        treeData:options,
        onChange,
        treeCheckable:true,
        showCheckedStrategy:SHOW_PARENT,
        placeholder:"Please select",
    };

    return (<div className={styles["region-root"]}>
        <TreeSelect {...tProps}/>
    </div>)

}

export default Region;