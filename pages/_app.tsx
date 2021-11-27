import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ViolencesProvider from '../src/context/ViolencesContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      Aquí va el header
      <ViolencesProvider>
        <Component {...pageProps} />
      </ViolencesProvider>
      Aquí va el footer
    </>
  )
}

export default MyApp
