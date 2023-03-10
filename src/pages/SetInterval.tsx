import React, { useState, useEffect } from "react";

function SetInterval() {
    const [count, setCount] = useState(0);

    /*
    timerID 是一個由 setInterval 返回的唯一識別 ID。
    在第一個 useEffect 中，在定時器設置後，將回傳一個清除函數，這樣當節點卸載時，React 就會自動執行該清除操作，以避免任何不必要的記憶體流失或其他錯誤。
    */
    useEffect(() => {
        const timerID = setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);
        console.log("timerID", timerID)
        return () => {
            clearInterval(timerID); // 清除訂閱
        };
    });

    // useEffect(() => {
    //     const timerID = setInterval(() => {
    //         setCount((count) => count + 1);
    //     }, 1000);
    //     console.log("timerID", timerID)      
    // });

    // useEffect(() => {
    //     console.log("空陣列，不依賴，只會在首次渲染後運行一次");
    // }, [])

    return (
        <div>
            <p>You clicked {count} times</p>
        </div>
    );
}

export default SetInterval;
