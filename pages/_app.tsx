import '@styles/globals.css'
import { AppProps } from 'next/app'


function Application({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default Application
