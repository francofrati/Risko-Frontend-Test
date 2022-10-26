import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='flex flex-col md:flex md:flex-row-reverse '>
        <div className='w-full'>
          <Navbar />
          <div className='hidden md:block'>
            <Component {...pageProps} />
          </div>
        </div>
        <div>
          <Sidebar />
          <div className='md:hidden'>
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  )
}

export default MyApp
