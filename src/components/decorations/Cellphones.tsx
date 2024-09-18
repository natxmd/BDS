import { useMediaQuery } from "react-responsive"

const Cellphones = () => {
    const isTablet = useMediaQuery({ query: '(min-width: 580px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 1000px)' })
    return (

        <>
            {
                isDesktop ?
                    <div className="flex gap-[26px] align-top">
                        <img src="/descarga/phone1.png"
                            alt="phone1"
                            className="mt-[-50px] h-auto"
                        />
                        <img src="/descarga/phone2.png"
                            alt="phone2"
                            className="mb-[-50px] h-auto"
                        />
                    </div>

                    :
                    (
                        isTablet ?
                            <img src="/descarga/phones.png"
                                alt="phones"
                                className="h-full"
                            />
                            :
                            <img src="/descarga/phone1.png"
                                alt="phone1"
                            />
                    )
            }
        </>
    )
}

export default Cellphones
