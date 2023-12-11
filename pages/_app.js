import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import '@/styles/globals.css'
import '@/styles/mediaquery.css';
import '@/styles/entrar.css';


export default function App({ Component, pageProps }) {
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-between">
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </div>

  )
}
