import React, { useState, useEffect } from 'react';
import { CodeBlockTS } from './component/Common';
import Prism from "prismjs";

function FunctionComponentCycleLife() {

    // state for count
    const [count, setCount] = useState(0);

    // mimicking componentDidMount
    useEffect(() => {
        console.log('ComponentDidMount')
    }, []);

    // mimicking componentDidUpdate
    useEffect(() => {
        console.log(`componentDidUpdate: You clicked ${count} times`);
        Prism.highlightAll()
    }, [count]);

    // mimicking componentWillUnmount 
    useEffect(() => {
        return () => {
            console.log('componentWillUnmount');
        }
    });

    return (
        <div className='container'>            
            <h1>Function Component生命週期</h1>
            <p>React 16.8版本之後，可以使用Hook來實現生命週期的功能。</p>
            <p>Hook是一個可以讓你在函數組件中使用state以及其他的React特性的函數。</p>

            <p>我們使用三個 useEffect hook 來模仿生命週期</p>
            <p>用來呈現componentDidMout、componentDidUpdate和componentWillUnmount </p>
            <p>請開啟F12，開發人員選項並到console去看訊息</p>
            <div className='flex align-center border'>
                <div className='flex flex-column text'>
                    <p>當第一次渲染時，我們會在控制台中看到</p>
                    <p>ComponentDidMount</p>
                </div>
                <CodeBlockTS>
                    {`
// mimicking componentDidMount
useEffect(() => {
    console.log('ComponentDidMount')
}, []);
`}
                </CodeBlockTS>
            </div>
            <p>接著，我們設定了一個count Button</p>
            <div className='flex align-center'>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click me</button>
            </div>
            <div className='flex align-center'>

            </div>
            <div className='flex align-center border'>
                <div className='flex flex-column text'>
                    <p>因為，useEffect會根據depency array來決定是否要執行，所以我們可以在depency array中放入count，當count改變時，我們會在控制台中看到componentDidUpdate</p>
                    <p>第一次載入頁面的時候，count為0</p>
                    <p>你會在console看到</p>
                    <p>componentDidUpdate: You clicked 0 times</p>
                </div>
                <CodeBlockTS>
                    {`
// mimicking componentDidUpdate
useEffect(() => {
    console.log("componentDidUpdate: You clicked ${count} times");
}, [count]);
`}
                </CodeBlockTS>
            </div>
            <p>當我們點擊count button時，count會改變，我們會在console看到</p>
            <p>componentDidUpdate: You clicked 多少次 times</p>

            <div className='flex align-center border'>
                <div className='flex flex-column text'>
                    <p>最後，當 component 卸載（被從 DOM 上刪除）時，我們會在console看到
                    </p>
                    <p>componentWillUnmount</p>

                    <p>注意</p>
                    <p>React 會在執行清除操作之前執行 useEffect 中的 return 函數。</p>
                    <p>這就是為什麼在 useEffect 中使用 return 函數來清除訂閱的原因。</p>
                    <p>現在直接呼叫這個 function 並不是真的卸載 component，只是模擬一下 componentWillUnmount 方法。</p>
                </div>
                <CodeBlockTS>
                    {`
// mimicking componentWillUnmount 
useEffect(() => {
    return () => {
        console.log('componentWillUnmount');
    }
});
`}
                </CodeBlockTS>
            </div>
            <h2>總結：</h2>
            <h3>首次渲染（第一次先執行 DidMount）</h3>
            <p>當函數式組件首次渲染時，第一個 useEffect hook 會被觸發，因為傳入的第二個參數是空數組 []。
                這個特定的語法告訴 React 僅當 mounts 時觸發此 useEffect。在這個假定情境中，代碼會將 "componentDidMount" 記錄到控制台中</p>
            <p>同時第二個和第三個 useEffect hook 也會觸發</p>
            <p>第二個 useEffect 會將 "componentDidUpdate: You clicked 0 times" 記錄到控制台中。</p>
            <p>第三個 useEffect 則會執行 return</p>

            <h3>更新（DidUpdate）</h3>
            <p>接著當使用者與應用程序交互以改變 count 變量並再次渲染時，第二個 useEffect hook 會被觸發。
                由於第二個 useEffect 接收一個陣列 [count] 作為其第二個參數，因此當更新發生時，React 將意識到它必須更新此特定 useEffect。
                代碼會將 "componentDidUpdate: You clicked 1 times" 記錄到控制台中。</p>

            <h3>卸載（WillUnmount）</h3>
            <p>當組件卸載時，React 會執行清理操作。在這個假定情境中，第三個 useEffect hook 會被觸發，因為它返回了一個函數。</p>
            <p>當count改變時候，會導致重新渲染，所以第三個 useEffect 也會重新執行</p>
            <p>就會先把上一次的Cleanup function執行 (return裡面的function) </p>
            <p>然後再執行第三個 useEffect，所以，我們會在控制台看到componentWillUnmount</p>

        </div >
    );
}

export default FunctionComponentCycleLife;