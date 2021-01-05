import '../styles/global.scss'
import Navbar from '../components/Navbar'

export default function MyApp({ Component, pageProps }) {
    return( 
        <>
            <Navbar />
            <Component {...pageProps} /> 
        </>
        )
}