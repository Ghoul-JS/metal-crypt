import Login from '@/pages/login'
import Register from '@/pages/register'
import Logo from './Logo'
import Link from 'next/link'

const NavBar = () => {
    return(
        <nav className='flex flex-col justify-center items-center w-full bg-black'>
            <section>
                <Logo />
            </section>

            <section >
                <ul className='flex justify-around w-40'>
                    <li>
                        <Link href="/login">
                            <p className='font-thin'>Login</p>
                        </Link>
                    </li>
                    <div className='font-thin'>/</div>
                    <li>
                        <Link href="/register">
                            <p className='font-thin'>Register</p>
                        </Link>
                    </li>
                </ul>
            </section>
        </nav>
    )
}
export default NavBar