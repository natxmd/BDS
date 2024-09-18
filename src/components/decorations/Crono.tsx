import { useMediaQuery } from "react-responsive";

interface Props {
    view: string;
    position: string;
}

const Crono = ({ view, position }: Props) => {

    const isMd = useMediaQuery({ query: '(min-width: 768px)' })

    return (
        isMd &&
        <img
            src='/icons/crono.png'
            alt="Crono"
            className={`absolute ${position}
            ${view}`}>
        </img>
    )
}

export default Crono
