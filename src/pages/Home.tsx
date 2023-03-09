import React, { useEffect } from "react";
export const Home = () => {
    const [count, setCount] = React.useState(0);


    useEffect(() => {
        console.log("first", count);

        /*
        function放在return statement內，該function會在Component unmount時執行(如果提供了dependency arg則是在它改變時執行)。
        所以它會印出"first cleanup"和當前的count值。
        */
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

    // useEffect(() => {
    //     console.log("first test")

    //     return () => {
    //         console.log("first test cleanup")
    //     }
    // }, [])

    return (
        <div>
            <h1>Home</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
        </div>
    );
};
