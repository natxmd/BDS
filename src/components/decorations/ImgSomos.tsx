import { useMediaQuery } from "react-responsive"

const ImgSomos = () => {

   const isSm = useMediaQuery({ query: '(min-width: 580px)' })
   const isMd = useMediaQuery({ query: '(min-width: 768px)' })

   return (
      <img
         src={isMd && "/somos/desktop.png" || isSm && "/somos/tablet.png" || "/somos/mobile.png"}
         alt="¿Quiénes Somos?"
         className="rounded-[14px]
         object-cover w-full h-[326px]">
      </img>
   )
}

export default ImgSomos
