import React, { useState, useEffect, useRef } from 'react';

export const CursorFollower: React.FC<{
    children?: React.ReactNode
}> = ({children}) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
    const ref = useRef<HTMLElement>(null)
    ref.current?.style?.setProperty("--x", `${cursorPosition.x}px`)
    ref.current?.style?.setProperty("--y", `${cursorPosition.y}px`)

    useEffect(() => {
        const handleMouseMove = (event) => {
            setCursorPosition({ x: event.clientX, y: event.clientY
        })}
        window.addEventListener('mousemove', handleMouseMove)
        return () => { window.removeEventListener('mousemove', handleMouseMove) }
    }, [])

    return (
        <section
            ref={ref}
            className="tc-categories-style10 px-lg-5"
        >
            {children}
        </section>
    )
}