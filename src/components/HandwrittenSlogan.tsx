import React, { useEffect, useState } from 'react'

interface Props {
    text: string
    delay?: number
}

const HandwrittenSlogan: React.FC<Props> = ({ text = '', delay = 0 }) => {
    const [visibleChars, setVisibleChars] = useState(0)

    useEffect(() => {
        if (!text) return

        let intervalId: ReturnType<typeof setInterval>
        const timeoutId = setTimeout(() => {
            intervalId = setInterval(() => {
                setVisibleChars((prev) => {
                    if (prev >= text.length) {
                        clearInterval(intervalId)
                        return prev
                    }
                    return prev + 1
                })
            }, 100)
        }, delay)

        return () => {
            clearTimeout(timeoutId)
            clearInterval(intervalId)
        }
    }, [text, delay])

    return (
        <p className="hero-slogan">
            {text.slice(0, visibleChars)}
        </p>
    )
}

export default HandwrittenSlogan
