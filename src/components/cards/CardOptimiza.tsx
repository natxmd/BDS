interface Props {
    img: string;
    text: string;
}

const CardOptimiza = ({ img, text }: Props) => {
    return (
        <div
            className="w-full grid justify-items-center
            gap-[20px] sm:gap-[12px] md:gap-[28px]
            max-w-[200px] phone:max-w-[288px]">
            <div 
                className='bg-white rounded-[16px] h-min
                grid items-center justify-items-center
                p-[16px] sm:p-[18px] md:p-[24px]'>
                <img
                    src={img}
                    alt={text}
                    className="mx-auto
                    w-[168px] sm:w-[140px] md:w-[240px]"
                />
            </div>
            <p
                className="font-Nunito font-semibold text-whiteB text-center leading-[130%] max-w-[168px] lg:max-w-[262px] mx-auto
                text-[18px] md:text-[28px]">
                {text}
            </p>
        </div>
    )
}

export default CardOptimiza
