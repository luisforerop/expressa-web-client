import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ViolencesProvider from '../src/context/ViolencesContext'
import Header from '../src/components/layout/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <ViolencesProvider>
        <Component {...pageProps} />
      </ViolencesProvider>
      Aquí va el footer
    </>
  )
}

export default MyApp
