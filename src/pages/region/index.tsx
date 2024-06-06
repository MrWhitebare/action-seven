import React, { Key, useEffect, useState } from "react";
import { DataServerResponse } from "@/vite-env";
import {Divider, Result, Tree, TreeProps, TreeSelect, TreeSelectProps} from 'antd';
import { LoadingOutlined } from "@ant-design/icons";
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
    name?:string;
    children?:regionItem[];
};

const mainlandChina={
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
                    key:item.id,
                    title:item.name!,
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
                    key:item.id,
                    title:item.name!,
                    value:item.id,
                });
            }
        }
        children.sort((a,b)=>{
            let [v1]=a.value.toString().split('_'),
                [v2]=b.value.toString().split('_');
            return parseInt(v1)-parseInt(v2);    
        });
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
        // params.append("where",`(level in (2,3,4) and prov_code not in ('110000','120000','310000','500000','710000','810000','820000') ) 
        //                 or (level=2 and prov_code in ('110000','120000','310000','500000'))`);
        params.append("where",`level in (2,3,4) and geoq_featureid <> '95920513-35b3-44e7-b462-e928ccd832b6'`);
        fetch(url,{
            method:"POST",
            body:params,
        })
            .then(data=>data.json())
            .then((res:DataServerResponse<regionItem[]>)=>{
                let regionItems:regionItem[]=res.result.data;
                regionItems.splice(0,0,mainlandChina);
                regionItems.forEach(item=>{
                    const {address,prov_code,prov_name,level,city_code,city_name,code,coun_name}=item;
                    switch(item.level){
                        case 1:
                            item.parentId=null;
                            item.id="all";
                            item.name=address;
                            break;
                        case 2:
                            item.parentId="all";
                            item.id=`${prov_code}_${level}`;
                            item.name=prov_name;
                            break;
                        case 3:
                            item.parentId=`${prov_code}_2`;
                            item.id=`${city_code}_${level}`;  
                            item.name=city_name;     
                            break;    
                        case 4:
                            item.parentId=`${city_code}_3`;
                            item.id=`${code}_${level}`;
                            item.name=coun_name;
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

    const onCheck=(checked: Key[] | { checked: Key[]; halfChecked: Key[]; }, info: any)=>{
        console.log("check",checked,info);
    }

    const onSelect=(selectedKeys:Key[], info:any)=>{
        console.log("select",selectedKeys,info);
    }

    const tProps:TreeSelectProps={
        className:styles.selector,
        treeData:options,
        onChange,
        treeCheckable:true,
        showCheckedStrategy:SHOW_PARENT,
        placeholder:"Please select",
    };

    const treeProps:TreeProps={
        checkable:true,
        treeData:options,
        defaultExpandedKeys:["all"],
        onCheck,
        onSelect,
        height:700
    };

    return (<div className={styles["region-root"]}>
        <TreeSelect {...tProps}/>
        <Divider>这是一条分割线</Divider>
        {options.length>0?<Tree {...treeProps}/>
            :<Result status={"info"} subTitle={<LoadingOutlined/>}/>}
    </div>)

}

export default Region;