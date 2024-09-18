import { useMediaQuery } from "react-responsive"
import Questions from "../components/acordions/Questions"
import ButtonGeneral from "../components/buttons/ButtonGeneral"
import CardBeneficios from "../components/cards/CardBeneficios"
import CardFunciona from "../components/cards/CardFunciona"
import CardOptimiza from "../components/cards/CardOptimiza"
import ImgSomos from "../components/decorations/ImgSomos"
import Crono from "../components/decorations/Crono"
import HeroIcons from "../components/decorations/HeroIcons"
import Cellphones from "../components/decorations/Cellphones"

const Home = () => {

    const isTablet = useMediaQuery({ query: '(min-width: 640px)' })
    const isMd = useMediaQuery({ query: '(min-width: 768px)' })
    const isLgAux = useMediaQuery({ query: '(min-width: 980px)' })

    return (
        <div className="bg-whiteB overflow-hidden">
            <section id="Hero"
                className="!relative">
                <HeroIcons svgD="/svg/tld.svg" svgT="/svg/tlt.svg"
                    position="top-0 left-0 lgAux:left-[-94px]
                    w-[184px] tablet:w-[172px] lgAux:w-[447px]"
                />
                <HeroIcons svgD="/svg/trd.svg" svgT="/svg/trt.svg"
                    position="top-0 right-0 lgAux:right-[-150px]
                    w-[133px] tablet:w-[219px] lgAux:w-[735px]"
                />
                <HeroIcons svgD="/svg/bld.svg" svgT="/svg/brt.svg"
                    position="bottom-0 right-0 lgAux:left-[-142px]
                    w-[132px] tablet:w-[286px] lgAux:w-[628px]"
                />
                {
                    !isLgAux &&
                    <div className="">
                        <HeroIcons svgD="/svg/brd.svg" svgT="/svg/blt.svg"
                            position={`bottom-0 
                            ${!isTablet ? "!w-[204px] left-[8px]" : "!w-[386px] left-[16px]"}`}
                        />
                        <img
                            src={!isTablet ? "/sections/nina-hero-m.png" : "/sections/nina-hero-t.png"}
                            className={`absolute bottom-0  
                            ${!isTablet ? "!w-[216px] left-[20px]" : "!w-[460px] left-[60px]"}`}
                        />
                    </div>
                }
                <div
                    className="relative max-w-[1180px] w-[92%] !h-full mx-auto 
                    pt-[62px] 
                    sm:pt-[82px] 
                    md:pt-0 
                    lgAux:flex lgAux:justify-between
                    xl:w-full">
                    <div
                        className="grid place-content-center justify-items-center
                        gap-[14.4px] pt-[62px] pb-[234px]
                        sm:gap-[21.6px] sm:pt-[82px] sm:pb-[422px]
                        md:gap-[28.8px] 
                        lgAux:max-w-[589px] lgAux:pt-[165px] lgAux:pb-[120px] 
                        lg:pb-[150px]">
                        <img src="logo.svg" />
                        <h1>
                            EL ÚNICO BANCO QUE <br />
                            <span> TE PAGA POR APRENDER </span>
                        </h1>
                        <ButtonGeneral bgColor="#FE4624" text="DESCARGA LA APP" />
                    </div>
                    {
                        isLgAux &&
                        <div className="h-auto w-[500px] desktop:w-[558px] ">
                            <HeroIcons svgD="/svg/brd.svg" svgT="/svg/blt.svg"
                                position="bottom-0 right-[20px] desktop:right-[88px]"
                            />
                            <HeroIcons svgD="/sections/nina-hero.png" svgT="/sections/nina-hero-t.png"
                                position="bottom-0 w-[512px] right-[-40px]
                                desktop:!w-[620px] desktop:right-[6px]"
                            />
                        </div>
                    }
                </div>
            </section>
            <section id="Optimiza"
                className="bg-purpleB">
                <div className="ContainerOptmiza">
                    <h2>¡OPTIMIZA TU TIEMPO!</h2>
                    <p className="p2 mx-auto max-w-[460px] md:max-w-none text-whiteB
                        py-[28px] sm:pt-[14px] sm:pb-[32px] md:pb-[56px]">
                        Encuentra los mejores momentos para ganar
                        <span className="font-extrabold"> Cronos </span>
                    </p>
                    <div
                        className="grid gap-[22px] justify-center
                        tablet:flex tablet:justify-between tablet:gap-[40px]">
                        <CardOptimiza img="/optimiza/invierte.png" text="Dale valor a tu tiempo aprendiendo" />
                        <CardOptimiza img="/optimiza/gana.png" text="Gana Cronos" />
                        <CardOptimiza img="/optimiza/canjea.png" text="Compra en la tienda" />
                    </div>
                </div>
            </section>
            <section id="Compra"
                className="grid justify-items-center mx-[4%] relative
                py-[90px] sm:py-[54px] md:py-[108px]">
                <div
                    className="!w-full bg-orangeB grid items-center relative
                    rounded-[18px] sm:rounded-[28px]
                    gap-[14px] p-[14.4px]
                    sm:gap-[16px] sm:p-[18px] sm:grid-cols-[200px_1fr] sm:max-w-[482px]
                    lg:gap-[54px] lg:py-[32px] lg:px-[42px] md:grid-cols-[368px_1fr] md:max-w-[880px]">
                    <div
                        className="w-full bg-whiteB
                        rounded-[18px] sm:rounded-[28px]">
                        <img
                            src="/sections/mochila.png"
                            className="mt-[-6px] mx-auto" />
                    </div>
                    <div
                        className="grid items-center place-content-center gap-[16px]
                        justify-items-center md:justify-items-start">
                        <h3 className=" text-whiteB text-center sm:text-left">
                            ¡Invierte tus cronos comprando en la tienda!
                        </h3>
                        <ButtonGeneral bgColor="#5227FF" text="REGÍSTRATE Y GANA" className="w-[184px] md:w-[280px]" />
                    </div>
                    <Crono view="w-[170px] rotate-[14deg]" position="right-[-70px] bottom-[64px]" />
                    <Crono view="w-[134px] rotate-[-12deg]" position="right-[300px] top-[-72px]" />
                    <Crono view="w-[192px] rotate-[-12deg]" position="left-[-180px] bottom-[-180px]" />
                </div>
                {isMd &&
                    <img
                        src='/sections/loro-compra.png'
                        alt="Loro"
                        className="w-[278px] rotate-[-50deg]
                        absolute right-[-150px] top-[40px]">
                    </img>
                }
            </section>
            <section id="Funciona"
                className="bg-purpleB">
                <div className="ContainerFunciona">
                    <h2>¿CÓMO FUNCIONA?</h2>
                    <div
                        className="grid gap-[36px] sm:gap-[22px] md:gap-[36px]">
                        <CardFunciona number={1} text="Descarga la App y pasa las primeras pruebas" />
                        <CardFunciona number={2} text="Regístrate con tu nombre y/o el nombre de tu apoderado" />
                        <CardFunciona number={3} text="Empieza a jugar y a ganar Cronos" />
                        <CardFunciona number={4} text="Compra en la tienda" />
                    </div>
                </div>
            </section>
            <section id="Descarga"
                className="bg-orangeB">
                <div
                    className="grid w-[92%] mx-auto max-w-[950px]
                    py-[46px] grid-cols-[1fr_129px]
                    sm:py-[40px] sm:grid-cols-[1fr_164px] tablet:!py-0 tablet:w-[86%]
                    lgAux2:!py-[80px] lgAux2:grid-cols-[405px_1fr] lgAux2:gap-[40px] lgAux2:w-full">
                    <div
                        className="grid items-stretch
                        sm:gap-[24px] sm:justify-items-center sm:items-center sm:h-min
                        md:gap-[29px] md:justify-items-start lg:order-2 tablet:py-[40px] lgAux2:py-0">
                        <div>
                            <h2 className="text-left">DESCARGA AQUÍ LA APP </h2>
                            <p className="p2 text-whiteB">
                                Te ayudará a comprar muchos premios.
                            </p>
                        </div>
                        <div className="grid gap-[15px]
                            tablet:flex tablet:gap-[21.6px]">
                            <img src="/icons/app-store.png" className="w-[105px] sm:w-[160px]" />
                            <img src="/icons/google-play.png" className="w-[105px] sm:w-[160px]" />
                        </div>
                        <ButtonGeneral bgColor="#5227FF" text="descarga aquí bds" />
                    </div>
                    <div className="relative lg:order-1">
                        <Cellphones />
                    </div>
                </div>
            </section>
            <section id="Beneficios">
                <div className="ContainerBeneficios">
                    <h2 className="text-blackB">BENEFICIOS</h2>
                    <div
                        className="grid items-center gap-[44px] 
                        sm:gap-[72px] sm:grid-cols-[230px_1fr]
                        lg:gap-[110px] lg:grid-cols-[1fr_498px]">
                        <div className="bg-[#D9D9D9] rounded-[45px] pt-[28px] h-min">
                            <img
                                src="/beneficios/nina.png"
                                alt="Beneficios"
                                className="mx-auto"
                            />
                        </div>
                        <div className="grid justify-items-center gap-[56px]
                            sm:justify-items-start sm:gap-[36px]">
                            <CardBeneficios icon="/beneficios/icon01.png" text="Accede a recursos lúdico educativos desde tu dispositivo." />
                            <CardBeneficios icon="/beneficios/icon02.png" text="Compra productos como alimentos, útiles escolares, ropa, smartphones, y mucho más." />
                            <CardBeneficios icon="/beneficios/icon03.png" text="Incentiva el auto aprendizaje desde los 7 años en adelante." />
                            <CardBeneficios icon="/beneficios/icon04.png" text="Colabora con la <br/> economía familiar." />
                        </div>
                    </div>
                </div>
            </section>
            <section id="Preguntas"
                className="bg-purpleB">
                <div className="ContainerPreguntas relative">
                    <h2>¿Preguntas frecuentes?</h2>
                    <Questions />
                    <Crono view="w-[134px] rotate-[22deg]" position="right-[-160px] top-[-72px]" />
                </div>
            </section>
            <section id="Somos">
                <div className="ContainerSomos">
                    <h2 className="text-blackB">¿Quiénes Somos?</h2>
                    <ImgSomos />
                    <div
                        className="grid  text-center gap-[28px] sm:gap-[36px] 
                        lg:gap-[98px] lg:grid-cols-[358px_1fr] lg:text-left">
                        <div
                            className="grid gap-[14px] sm:gap-[36px] md:gap-[16px] items-start place-content-center
                            justify-items-center lg:justify-items-start">
                            <h3 className="w-auto max-w-[580px] mx-auto">
                                ¡Somos el primer y único banco que te paga por aprender!
                            </h3>
                            <ButtonGeneral bgColor="#E6472A" text="CONTÁCTANOS" />
                        </div>
                        <p className="p3">
                            Desde nuestra plataforma te damos todos los elementos lúdico educativos necesarios para ganar Cronos (moneda virtual BdS) y comprar una serie de productos en nuestra tienda virtual.
                            <br /><br />
                            Sólo tienes que invertir el tiempo usualmente improductivo, S/.50.00 al año, y poner a prueba tus conocimientos. La App BdS está dirigida a todo público de los 7 años en adelante.
                        </p>
                    </div>
                </div>
            </section>
            <section id="Apoyar"
                className="bg-greenB">
                <div className="ContainerApoyar relative">
                    <div
                        className="w-full lg:max-w-[736px] desktop:!max-w-[886px]
                        grid justify-items-center gap-[42px] sm:gap-[36px]">
                        <h2 className="text-blackB">¿Quieres apoyar a la educación en tu país?</h2>
                        <p
                            className="p2 font-bold text-center sm:text-[24px] xl:text-[26px]">
                            Apoya la educación, nutrición de los niños y la familia. Tu empresa tiene que ser parte de la evolución en la educación y alimentación. Se parte de nuestra misión, y haz una contribución para apoyar a las futuras generaciones en su formación.
                        </p>
                        <ButtonGeneral bgColor="#E6472A" text="QUIERO APOYAR" />
                    </div>
                    <img
                        src="/sections/loro-big.png"
                        alt="Loro"
                        className="mx-auto mb-[-130px] max-w-[268px] phone:max-w-[276px] md:max-w-[360px]
                        lg:absolute lg:mb-0 lg:bottom-[-110px] lg:right-[-100px]
                        desktop:right-[-180px]">
                    </img>
                </div>
            </section>

        </div>
    )
}

export default Home
