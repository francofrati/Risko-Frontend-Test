import {MdOutlineNotifications,MdKeyboardArrowDown} from 'react-icons/md'

const Navbar = () => {
  return (
    <div className='h-[70px] w-full xborder__gradient flex items-center px-6'>
      <div className='flex w-3/4 gap-6 items-center '>
        <img src={'/main_logo.png'} alt="main_logo" className='w-[40px] h-[45px] md:hidden'/>
        <span className='font-semibold text-2xl text-nameColor'>Andrea Sotil</span>
      </div>
      <div className='flex w-1/4 justify-end items-center gap-7'>
        <div>
          <MdOutlineNotifications size={'24px'}/>
        </div>
        <div>
          <MdKeyboardArrowDown size={'24px'} color={'#616473'}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar