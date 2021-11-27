import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ViolencesProvider from '../src/context/ViolencesContext'
import Header from '../src/components/layout/Header'
import Footer from '../src/components/layout/Footer/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <ViolencesProvider>
        <Component {...pageProps} />
      </ViolencesProvider>
      <Footer/>
    </>
  )
}

export default MyApp
