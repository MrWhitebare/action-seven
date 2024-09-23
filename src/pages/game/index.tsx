import React, { ReactElement } from "react";
import { Button, Col, Row, Slider, SliderSingleProps, Input, InputNumber, List, Avatar, Empty, Divider, message } from "antd";
import { useLocalObservable, Observer } from "mobx-react";
import type { GetProps } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import styles from './index.module.scss';

const marks: SliderSingleProps['marks'] = new Array(100).fill(0).reduce((previous: Record<number, string>, _, index) => {
    let value = index + 1;
    if (value % 10 === 0) {
        previous[value] = value.toString();
    }
    return previous;
}, {});

type OTPProps = GetProps<typeof Input.OTP>;

type logItem = {
    index: number;
    message: string;
};

type gameState = {

    range: Array<number>;

    optMask: string | boolean;

    targetValue: string;

    existTarget: boolean;

    optShow: boolean;

    guess: number | null;

    count: number;

    logs: Array<logItem>;

    success: boolean;

    setRange: (range: Array<number>) => void;

    setMask: (mask?: boolean) => void;

    setTargetValue: (value: string) => void;

    setGuess: (value: number | null) => void;

    setCount: () => void;

    addLog: (item: logItem) => void;

    setSuccess:(value:boolean)=>void;

    reset: () => void;
}

const symbol = '🔒';

const GameUI: React.FC = (): ReactElement => {

    const store = useLocalObservable<gameState>(() => ({

        range: [1, 100],

        optMask: symbol,

        targetValue: "",

        guess: null,

        count: 0,

        logs: [],

        success:false,

        get optShow() {
            return typeof this.optMask === "string";
        },

        get existTarget() {
            return this.targetValue !== "";
        },

        setRange(range: number[]) {
            this.range = range;
        },

        setMask(mask?: boolean) {
            let type = typeof mask;
            switch (type) {
                case "boolean":
                    this.optMask = false;
                    break;
                default:
                    this.optMask = symbol;
                    break;
            }
        },

        setTargetValue(value) {
            this.targetValue = value;
        },

        setGuess(value: number | null) {
            this.guess = value;
        },

        setCount() {
            this.count++;
        },

        addLog(item: logItem) {
            this.logs.push(item);
        },

        setSuccess(value:boolean) {
            this.success=value;
        },

        reset() {
            this.range = [1, 100];
            this.optMask = symbol;
            this.targetValue = "";
            this.guess = null;
            this.count = 0;
            this.logs = [];
            this.success=false;
        }

    }));

    const rangeChange = (value: number[]) => {
        if (Array.isArray(value)) {
            store.setRange(value);
        }
    }

    const handleOptShow = () => {
        if (store.optShow) {
            store.setMask(false);
        } else {
            store.setMask();
        }
    }

    const onEnter = () => {
        const { guess, range: [min, max], targetValue,success } = store;
        
        if(guess===null||isNaN(guess)){
            message.error("请输入数字！");
            return;
        }

        if(success) {
            message.error("游戏已结束,请重置游戏！");
            return;
        }

        let target = parseInt(targetValue);
        store.setCount();
        let item: logItem = {
            index: store.count,
            message: `恭喜你！你猜对了！答案是 ${target}。你总共猜了 ${store.count} 次。`
        };
        if (guess && guess !== target) {
            if (guess < min || guess > max) {
                item.message = `请猜一个介于 ${min} 和 ${max} 之间的数字。`;
            } else if (guess > target) {
                item.message = `值${guess} 太大了`;
            } else if (guess < target) {
                item.message = `值${guess} 太小了`;
            }
        }else{
            store.setSuccess(true);
        }
        store.addLog(item);   
    }

    const startGame = () => {
        const { range: [min, max],success } = store;
        if(!success){
            let target = Math.floor(Math.random() * (max - min + 1)) + min;
            store.setTargetValue(target.toString());
        }else{
            store.reset();
        }
    }

    return (<Observer>
        {() => (<div className={styles["game-ui"]}>
            <Row className={styles.item}>
                <Col span={3}>
                    生成随机数的区间：
                </Col>
                <Col span={10}>
                    <Slider range
                        value={store.range}
                        min={1}
                        max={100}
                        marks={marks}
                        onChange={rangeChange} />
                </Col>

            </Row>
            <Row className={styles.item}>
                <Col span={3}>当前要猜测的目标值：</Col>
                <Col span={2}>
                    <Input.OTP mask={store.optMask} length={2}
                        disabled
                        value={store.targetValue} onChange={value => store.setTargetValue(value)} />
                </Col>
                <Col span={2}>
                    <Button type="primary" icon={store.optShow ?
                        <EyeInvisibleOutlined /> : <EyeOutlined />
                    } onClick={handleOptShow}>{store.optShow ? "显示" : "隐藏"}数字</Button>
                </Col>
            </Row>
            <Row className={styles.item}>
                <Col span={3}>输入猜测值：</Col>
                <Col span={2}>
                    <InputNumber
                        value={store.guess}
                        onChange={value => store.setGuess(value)} />
                </Col>
                <Col span={2}>
                    <Button type="primary" onClick={onEnter}>确认输入</Button>
                </Col>
                <Col span={2}>
                    <Button type="primary" disabled={store.success?false:store.existTarget}
                        className={store.success?styles.reset:""}
                        onClick={startGame}
                    >{store.success?"重置":"开始游戏"}</Button>
                </Col>
            </Row>
            <Divider>结果区域</Divider>
            <Row className={styles.result}>
                <Col span={24}>
                    <List itemLayout="horizontal">
                        {store.logs.length > 0 ?
                            store.logs.map((item, index) => (<List.Item  key={index + "item"}>
                                <List.Item.Meta
                                    avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                                    title={"记录" + item.index}
                                    description={item.message}
                                />
                            </List.Item>))
                            : <Empty />}
                    </List>
                </Col>
            </Row>
        </div>)}
    </Observer>)

}

export default GameUI;