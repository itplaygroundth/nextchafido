import { ThemeProvider } from '../src/theme'
import React, { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import TopBar from '../src/components/TopBar'
//import { Footer } from '../src/components/Footer'
//import styles from '../styles/App.modules.scss'
import {AuthProvider,ProtectRoute} from './../src/lib/userContext'

const MyApp = ({ Component, pageProps }: AppProps): React.ReactNode => {
  const [style, setStyle] = useState<React.CSSProperties>({ visibility: 'hidden' })
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
    setStyle({})
  }, [])

  return (
    <>
      <div className={styles['app-container']} style={style}>
        <ThemeProvider>
          <div className={styles['content-container']}>
          <TopBar />
            <AuthProvider>
            <ProtectRoute>
            
            <Component {...pageProps} />
            </ProtectRoute>
            </AuthProvider>
          </div>
          {/* <Footer /> */}
        </ThemeProvider>
      </div>
    </>
  )
}

export default MyApp
