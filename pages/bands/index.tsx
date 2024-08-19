import NavRoot from "@/components/NavRoot"
import { useState, useEffect, useMemo } from "react"
import BandsService from "@/services/bands.service"
import Image from "next/image"
import Logo from "@/components/Logo"


interface IntBands {
    band_id: string,
    bandname: string,
    logoBand: string,
    genre: string,
    formedDate: string
}

const BandsHome = () => {
    const [bands, setBands] = useState<IntBands[]>([])
    const $Bands = useMemo(() => new BandsService(), [])


    useEffect(() => {
        const fetchBands = async () => {
            try {
                const response = await $Bands.getBands()
                setBands(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchBands()
    }, [])

    return(
        <div>
            <Logo />
            <NavRoot />

            <div className="flex items-center justify-center mt-16 ">
                    <div className="flex justify-center w-[40%] h-[40%] gap-2">
                        {
                            bands?.map((e) => (
                                <div key={e.band_id}>
                                    <Image width={400} height={400} src={e.logoBand} alt="photo"/>
                                    <h2>{e.bandname}</h2>
                                    <p>Genre/s: {e.genre}</p>
                                    <p>Formed: {new Date(e.formedDate).toISOString().split('T')[0]}</p>
                                </div>
                            ))  
                        }
                    </div>
                </div>
            </div>
    )
}

export default BandsHome