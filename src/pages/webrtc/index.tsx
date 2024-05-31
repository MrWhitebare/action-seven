import React, {FC, ReactElement, useEffect } from "react";
import ScreenShot from "js-web-screen-shot";
import { Button } from "antd";

const WebRtcUI:FC=():ReactElement=>{

    const screenShot=()=>{
        new ScreenShot({});
    }

    return (<div>
        <Button type="primary" onClick={screenShot}>截图</Button>
    </div>)

}

export default WebRtcUI;