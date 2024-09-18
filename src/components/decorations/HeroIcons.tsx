import { useMediaQuery } from "react-responsive";

interface Props {
    svgD: string;
    svgT: string;
    position: string;
}

const HeroIcons = ({ svgD, svgT, position }: Props) => {
    const Tablet = useMediaQuery({ maxWidth: "980px" })

    return (
        <img
            src={ Tablet ? svgT : svgD }
            alt=""
            className={`absolute ${position}`}>
        </img >
    )
}

export default HeroIcons
