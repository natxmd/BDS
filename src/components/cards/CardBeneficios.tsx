interface Props {
    icon: string
    text: string
}

const CardBeneficios = ({ icon, text }: Props) => {
    return (
        <div
            className="grid items-center justify-items-center gap-[20px]
            sm:flex sm:justify-items-start sm:gap-[22px]">
            <img
                src={icon}
                alt={text}
                className="mx-auto"
            />
            <p className="p2 text-center sm:text-left md:text-[26px]" 
                dangerouslySetInnerHTML={{ __html: `${text}` }}>
            </p>
        </div>
    )
}

export default CardBeneficios
