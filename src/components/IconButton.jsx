import { useRef, useState } from "react"

export default function IconButton({ children, text, color, ...props }) {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)
    return (
        <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`flex px-1   md:px-1.5 md:py-1 py-0.5  items-center rounded-lg text-black ${color || "bg-white"}`}

            {...props}>
            {children}
            <div
                style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
                className="overflow-x-hidden transition-all duration-300 ease-out">
                <span ref={ref} className=" px-1   md:px-1.5">{text}</span>
            </div>
        </button>
    )
}