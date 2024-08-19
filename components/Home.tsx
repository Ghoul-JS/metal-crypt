import Link from "next/link"

const Home = () => {
    return (
        <div className="flex justify-center flex-col items-center ">

                <h2 className="text-lg">¡Bienvenidos a Metal Crypt!</h2>
                <div className="w-[60%]">
                    <p>
                    Tu refugio definitivo para todo lo relacionado con el metal underground. En Metal Crypt, nos apasiona la fuerza y la autenticidad de las bandas de metal que luchan en las sombras, aquellas que, lejos de los reflectores, mantienen vivo el espíritu del metal en su forma más pura.
                    </p>
                    <br />
                    <p>
                    Nuestra misión es registrar y dar visibilidad a las bandas de metal underground de todo el mundo, desde los rincones más oscuros hasta los escenarios más pequeños. Aquí podrás descubrir nuevas bandas, sumergirte en entrevistas exclusivas, seguir las giras más intensas y mantenerte al día con las últimas noticias del mundo del metal.
                    </p>
                    <br />
                    <p>
                    Metal Crypt no es solo una página, es una comunidad global para todos aquellos que viven y respiran metal. Únete a nosotros en este viaje por el lado más crudo y real del metal. ¡El underground vive en Metal Crypt!
                    </p>
                </div>

                <button className="mt-5">
                    <Link href='/bands'>Ver Bandas</Link>
                </button>
        </div>
    )
}

export default Home