import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      Aquí va el header
      <Component {...pageProps} />
      Aquí va el footer
    </>
  )
}

export default MyApp
