import { useRouter } from 'next/router'
import Link from 'next/link'

import { RiHome6Line, RiCalendar2Line, RiNewspaperLine } from 'react-icons/ri'
import { HiOutlineShoppingBag } from 'react-icons/hi'


const Sidebar = () => {

    const { asPath } = useRouter()

    return (
        <div
            className='h-[50px] w-screen yborder__gradient flex items-center justify-around md:flex-col md:h-screen md:w-[80px] md:justify-start'>
            <div className='hidden md:flex md:h-[70px] md:justify-center md:items-center'>
                <img src={'/main_logo.png'} alt="main_logo" className='w-[30px] h-[35px]' />
            </div>
            <div className='flex items-center justify-around w-full md:flex-col md:justify-start md:gap-[40px] md:mt-[40px]'>
                <Link href={'/'}>
                    <a><RiHome6Line size={'24px'} color={asPath === '/' ? '#e484f9' : '#c3c9d4'} /></a>
                </Link>
                <Link href={'/schedule'}>
                    <a><RiCalendar2Line size={'24px'} color={asPath === '/schedule' ? '#e484f9' : '#c3c9d4'} /></a>
                </Link>
                <Link href={'/resumes'}>
                    <a><RiNewspaperLine size={'24px'} color={asPath === '/resumes' ? '#e484f9' : '#c3c9d4'} /></a>
                </Link>
                <Link href={'/investements'}>
                    <a><HiOutlineShoppingBag size={'24px'} color={asPath === '/investements' ? '#e484f9' : '#c3c9d4'} /></a>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar