import React from 'react';
import { Editor, Monaco, OnChange, OnMount, OnValidate } from '@monaco-editor/react';
import styles from './index.module.scss';

const DashBoard:React.FC=():React.ReactElement=>{

    const handleEditorChange:OnChange=(value,event)=>{
        console.log(value,event);
    }

    const handleEditorDidMount:OnMount=(editor, monaco:Monaco)=>{
        console.log('onMount: the editor instance:', editor);
        console.log('onMount: the monaco instance:', monaco);
    }

    const handleEditorWillMount=(monaco:Monaco)=>{
        console.log('beforeMount: the monaco instance:', monaco);
      }
    
      const handleEditorValidation:OnValidate=(markers)=>{
        // model markers
        markers.forEach(marker => console.log('onValidate:', marker.message));
    }

    const code =`/* 1. 数字求和 */
const numbers:number[]=[1,2,3,4,5];
const sums=numbers.reduce((acc,curr)=>acc+curr,0);
console.log(sums);

/* 2. 扁平化组数 */

const nestedArray: number[][] = [[1, 2], [3, 4], [5, 6]];
const flattenedArray: number[] = nestedArray.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattenedArray);

/* 3. 对对象进行分组 */

interface Person{
    name:string;
    age:number;
}

const people:Person[]=[
    { name:"alias",age:25},
    { name:"Bob",age:30},
    { name: 'Charlie', age: 25 },
    { name: 'Dave', age: 30 }
]

const groupedByAge: { [key: number]: Person[] } = people.reduce((acc, curr) => {
  if (!acc[curr.age]) {
    acc[curr.age] = [];
  }
  acc[curr.age].push(curr);
  return acc;
}, {});

console.log(groupedByAge);

/* 4. 查找映射
    使用reduce()创建查找映射，就可以在恒定的时间复杂度下通过元素的唯一标识符访问元素
 */

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 699 },
  { id: 3, name: 'Tablet', price: 499 },
];

const productMap: { [key: number]: Product } = products.reduce((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {});

console.log(productMap);

const laptop: Product = productMap[1];
console.log(laptop); // Output: { id: 1, name: 'Laptop', price: 999 }

/**
 * 5. 计算出现次数
 */

const fruits: string[] = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const fruitCounts: { [key: string]: number } = fruits.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(fruitCounts);

/**
 * 6. 组合函数
 */
const add5 = (x: number): number => x + 5;
const multiply3 = (x: number): number => x * 3;
const subtract2 = (x: number): number => x - 2;

const composedFunctions: ((x: number) => number)[] = [add5, multiply3, subtract2];

const result: number = composedFunctions.reduce((acc, curr) => curr(acc), 10);
console.log(result); // Output: 43

/**
 * 7. 实现类似Redux的状态管理
 */

interface State {
  count: number;
  todos: string[];
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: State = {
  count: 0,
  todos: [],
};

const actions: Action[] = [
  { type: 'INCREMENT_COUNT' },
  { type: 'ADD_TODO', payload: 'Learn Array.reduce()' },
  { type: 'INCREMENT_COUNT' },
  { type: 'ADD_TODO', payload: 'Master TypeScript' },
];

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return { ...state, count: state.count + 1 };
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};

const finalState: State = actions.reduce(reducer, initialState);
console.log(finalState);
/*
Output:
{
  count: 2,
  todos: ['Learn Array.reduce()', 'Master TypeScript']
}
*/

/** 8. 生成唯一值 */
const numbers8: number[] = [1, 2, 3, 2, 4, 3, 5, 1, 6];

const uniqueNumbers: number[] = numbers8.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6]

/** 9. 计算平均值 */
const grades: number[] = [85, 90, 92, 88, 95];

const average: number = grades.reduce((acc, curr, index, array) => {
  acc += curr;
  if (index === array.length - 1) {
    return acc / array.length;
  }
  return acc;
}, 0);

console.log(average); // Output: 90`;


    return (<div className={styles.dashboard}>
        <div className={styles.left}>
            <Editor height={"100%"}
                defaultLanguage={"typescript"}
                defaultValue={code}
                onChange={handleEditorChange}
                onMount={handleEditorDidMount}
                beforeMount={handleEditorWillMount}
                onValidate={handleEditorValidation}/>
        </div>
        <div className={styles.right}>

        </div>
    </div>)

}

export default DashBoard;