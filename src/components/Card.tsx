import { ScriptProps } from "next/script"

export default function Footer({ children, className }: ScriptProps) {
    return (
        <div className={`Card bg-bg0 border-2 border-fg0 rounded-xl drop-shadow-xl overflow-hidden ${className}`}>
            {children}
        </div>
    )
}