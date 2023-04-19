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
// interface Props1 {
//     children: React.ReactNode
// }

// export const CodeBlockTS: React.FC<Props1> = ({ children }) => (
//     <pre>
//         <code className="language-typescript" >
//             {children}
//         </code>
//     </pre>
// );

interface ICopyToClipboard {
    children: string
}
export const CodeBlockTS = ({ children }: ICopyToClipboard) => {
    const textInput = React.useRef<HTMLDivElement>(null)
    const [hovered, setHovered] = React.useState(false)
    const [copied, setCopied] = React.useState(false)

    const onEnter = () => {
        setHovered(true)
    }

    const onExit = () => {
        setHovered(false)
        setCopied(false)
    }

    const onCopy = () => {
        setCopied(true)
        if (textInput.current !== null && textInput.current.textContent !== null)
            navigator.clipboard.writeText(textInput.current.textContent)
        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }

    return (
        <div
            ref={textInput}
            onMouseEnter={onEnter}
            onMouseLeave={onExit}
            className="relative code-block"
        >
            {hovered && (
                <button
                    aria-label="Copy code"
                    type="button"
                    className={`btn ${copied ? 'copied' : ''}`}
                    onClick={onCopy}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        className={copied ? 'text-green-400' : 'text-gray-300'}
                    >
                        {copied ? (
                            <>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                                />
                            </>
                        ) : (
                            <>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                />
                            </>
                        )}
                    </svg>
                </button>
            )}
            <pre>
                <code className="language-typescript" >
                    {children}
                </code>
            </pre>
        </div>
    )
}














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

