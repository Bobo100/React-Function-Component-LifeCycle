import React from 'react';

export const CodeBlockBasic = ({ code }: { code: string }) => (
    <pre>
        <code className="language-javascript" >
            {code}
        </code>
    </pre>
);

// 傳遞方式稱為"props children"。
// 它允許父組件將多個元素作為子代傳遞給子組件。
// 傳遞 ReactNode 可以使用內聯 JSX，字符串，組件或其他任何 React 元素。
interface Props1 {
    children: React.ReactNode
}

export const CodeBlockTS: React.FC<Props1> = ({ children }) => (
    <pre>
        <code className="language-typescript" >
            {children}
        </code>
    </pre>
);

interface Props2 {
    code: string
}

export const CodeBlock2: React.FC<Props2> = ({ code }) => (
    <pre>
        <code className="language-javascript" >
            {code}
        </code>
    </pre>
);

