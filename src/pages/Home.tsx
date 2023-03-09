import React, { useEffect, useRef } from "react";
import Counter from "./FunctionComponent";
export const Home = () => {
    const [count, setCount] = React.useState(0);


    /*
    這份程式碼使用了react中的hook useEffect()，在component一開始render時和每次特定的dependency改變時都會執行。
    當一開始 render 時，會印出 "first 0"。接著 useEffect() 內會 return 一個 function。該 function 的內容不會立刻執行並會在 Component unmount時(或有特定的改動)被觸發。
    之後當 count 改變時，useEffect() 會判斷上一次儲存的 count 值是否和目前的 count 值有不同，如果有不同，useEffect() 會重新執行並先觸發之前return的 function (cleanup function)，印出 "first cleanup <之前的 count 值>"。
    接著再執行 function 內的內容並印出 "first <新的 count 值>" ，然後儲存當前的 count 值。所以首次執行將會印出 "first 0" ，count 改變時毎次都會觸發 "first cleanup <之前的 count 值>"。
    */
    useEffect(() => {
        console.log("first", count);

        /*
        function放在return statement內，該function會在Component unmount時執行(如果提供了dependency arg則是在它改變時執行)。
        所以它會印出"first cleanup"和當前的count值。
        */

        /*
        這邊 () => { console.log("first cleanup", count); } 是回調函數 (Callback Function) ，而整個 function 的部分則是當組件 unmount 後，React 會呼叫的清除函數。
        在 useEffect() 中加入含有返回值 (Return statement) 的回調函數，是為了當組件 unmount 時釋放資源、註銷訂閱以及清除定時器等等操作。
        也就是說，在本例中，當 count 發生改變時，會執行一遍 console.log("first cleanup", count)
        但若該 component 再次 render 前被卸載(unmounted)，例如因為切換到另一分頁或關閉瀏覽器標籤，此時 () => { console.log("first cleanup", count); } 就不再被觸發
        取而代之的是 React 調用清除函數，也就是 { console.log("first cleanup", count); } 情境；在此情況下會出現 first cleanup 以及最後一個 count 的值。
        */

        // 這個 return代表 componentWillUnmount 和 componentDidUpdate (當 count 改變時) 都會觸發。要看unmount 請到 index.tsx 開啟註解 (setTimeout那一段)
        return () => {
            console.log("first cleanup", count);
        }
    }, [count])

    // useEffect(() => {
    //     console.log("first", count);

    //     /*
    //     直接在return statement裡面印出console.log語句。
    //     在unmout phase時不會被執行，因為這樣的語句不能被當作有效的clean-up function。 
    //     相反的，這只是在render階段產生effect，並且印出countr當前值的文本
    //     */
    //     return (
    //         console.log("first cleanup", count)
    //     )
    // }, [count])

    const mounted = useRef(false);
    useEffect(() => {
        if (mounted.current === false) {
            mounted.current = true;
            /* 下面是 componentDidMount*/
            console.log("componentDidMount")

            /* 上面是 componentDidMount */
        }
        else {
            /* 下面是componentDidUpdate */
            console.log("componentDidUpdate")

            /* 上面是componentDidUpdate */

        }

        return (() => {
            /* 下面是 componentWillUnmount */
            console.log("componentWillUnmount")

            /* 上面是 componentWillUnmount */
        })
    }, [mounted.current]); /* 第二個參數是用來限定當哪些變數被改變時useEffect要觸發 */

    return (
        <div>
            <h1>Home</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount((prev) => prev + 1)}>Click</button>

            <Counter />
        </div>
    );
};
