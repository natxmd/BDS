import { useState } from "react";

interface Props {
    text: string;
    bgColor: string;
    className?: string;
}

const ButtonGeneral = ({ text, bgColor, className }: Props) => {

    const [hover, setHover] = useState(false)

    return (
        <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`rounded-[45px] transition-all ease-in-out
            font-Nunito font-extrabold text-white ${className} text-center uppercase
            text-[12px] w-[184px] h-[48px]
            sm:text-[18px] sm:w-[280px] sm:h-[64px]`}
            style={{
                backgroundColor: bgColor,
                boxShadow: hover ? 'none' : 'inset 0px -8px 0px 0px rgba(0, 0, 0, 0.25)'
            }}>
            {text}
        </button>
    )
}

export default ButtonGeneral
