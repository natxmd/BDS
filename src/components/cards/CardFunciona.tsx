interface Props {
    number: number
    text: string
}

const CardFunciona = ({ number, text }: Props) => {
    return (
        <div 
            className="grid items-center
            grid-cols-[50px_1fr]
            sm:grid-cols-52px[_1fr]
            md:grid-cols-[86px_1fr]
            gap-[16px] sm:gap-[18px] md:gap-[28px]">
            <div 
                className="flex items-center justify-center
                bg-orangeB rounded-full
                w-[50px] sm:w-[52px] lg:w-[86px]
                h-[50px] sm:h-[52px] lg:h-[86px]">
                <p
                    className="font-Nunito font-extrabold text-whiteB
                    text-[22px] md:text-[44px]">
                    {number}
                </p>
            </div>

            <p className="p2 font-medium text-whiteB text-left">
                {text}
            </p>
        </div>
    )
}

export default CardFunciona
