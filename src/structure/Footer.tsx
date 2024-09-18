import CardDescarga from "../components/cards/CardDescarga"
import { Link } from 'react-scroll';

const Footer = () => {
   return (
      <footer
         className="bg-whiteB relative z-20">
         <div
            className="grid w-[92%] mx-auto max-w-[974px] 
            py-[40px] gap-[21px]
            sm:py-[54px] sm:gap-[16px]
            md:py-[64px] lg:gap-[43px] lg:w-full  ">
            <div
               className="grid gap-[24px]
               sm:grid-cols-[205px_1fr_202px]
               lg:grid-cols-[297px_1fr_202px]">
               <div className="grid gap-[15px]">
                  <img src="logo.svg" />
                  <p className="font-Nunito font-bold text-[#371AA0]
                     text-[18px] md:text-[21.6px]">
                     “Abre las puertas al conocimiento y la diversión educativa”
                  </p>
               </div>
               <div className="font-Nunnito text-[16px] text-blackB grid gap-[10.8px] h-min sm:justify-center">
                  <h6 className="font-extrabold">Información</h6>
                     <Link
                        to="Murales"
                        spy={true}
                        offset={-64}
                        smooth={true}
                        duration={500}>
                     Quiénes somos
                  </Link>
                  <Link to={""}>Contáctanos</Link>
                  <Link to={""}>Preguntas frecuentes</Link>
               </div>
               <CardDescarga />
            </div>
            <div className="w-full h-[0.9px] bg-blackB" />
            <div className="grid gap-[20px] sm:flex sm:justify-between">
               <div className="w-full flex justify-between items-center max-w-[270px]
                  font-Nunito font-bold text-[12.6px] text-blackB">
                  <a href="" target="_blank">
                     Términos
                  </a>
                  <a href="" target="_blank">
                     Privacidad
                  </a>
                  <a href="" target="_blank">
                     Cookies
                  </a>
               </div>
               <div className="flex gap-[13.5px] items-center">
                  <a href="" target="_blank">
                     <img src="/svg/in.svg" alt="" />
                  </a>
                  <a href="" target="_blank">
                     <img src="/svg/fb.svg" alt="" />
                  </a>
                  <a href="" target="_blank">
                     <img src="/svg/ig.svg" alt="" />
                  </a>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer
