import { useRouter } from 'next/router'
import BandsService from '@/services/bands.service';
import Image from "next/image"

import NavBar from "@/components/NavBar"
import NavRoot from "@/components/NavRoot"

interface BandParams {
    _id: string,
    
    data: object
}

interface BandResponse {
    status: boolean;
    data: BandParams;
}

const BandPage = ({ band }: { band: BandParams }) => {  
    const router = useRouter()
    const data = band.data
    return (
        <div>
            <NavBar/>
            <NavRoot />

            <div className='flex flex-col items-center'>
                <div className='w-[60%]'>
                    <h1>{data.bandname}</h1>
                    <p>{data.genre.map(e => e)}</p>
                    <Image width={200} height={200} src={data.logoBand} alt="photo" />
                    <p>{new Date(data.formedDate).toISOString().split('T')[0]}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maxime molestiae repellat autem ad. Suscipit laudantium provident aperiam explicabo labore velit aliquam laboriosam, distinctio quam cumque deleniti porro harum laborum!</p>
                </div>
            </div>  
        </div>
    )
}

export default BandPage;

export async function getStaticPaths() {
    const $Band = new BandsService();
    const response = await $Band.getBands();
   
    if (!response.status) {
        throw new Error('Error fetching bands');
    }

    const bands = response.data;

    const paths = bands?.map((band: BandParams) => ({
        params: { id: band._id },
    }));

    return {
        paths,
        fallback: false, 
    };
}

interface ParamsBand {
    id: string;
}

export async function getStaticProps({ params }: { params: ParamsBand }) {    
    const $Band = new BandsService();
    const band: BandResponse = await $Band.getBandById(params.id);


    return {
        props: {
            band: JSON.parse(JSON.stringify(band)) 
        },
    };
}
