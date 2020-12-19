import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
    
    console.log('hello from _app.js');
    return <Component {...pageProps} />
}