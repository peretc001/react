import {useEffect} from "react";

import Header from "./header/header";
import Footer from "./footer/footer";

import {useStore} from '@/hooks/useStore'
import {useActions} from "@/hooks/useActions";

import {windowHeightSetToDocument, getWindowWidthMode} from "@/utils/Helper";

import styles from './layout.module.scss';
import ModalProvider from "@/UI/Modal/ModalProvider";
import {ModalRoot} from "@/UI/Modal/ModalRoot";

const Layout = ({children}) => {
  const {isMobile} = useStore(state => state.modeReducer)
  const {setMode} = useActions()
  // console.log(isMobile)

  const resizeWindow = () => {
    const mode = getWindowWidthMode()
    setMode(mode)
    windowHeightSetToDocument()
  }

  useEffect(() => {
    resizeWindow()

    window.addEventListener('resize', resizeWindow)
    return () => window.removeEventListener('resize', resizeWindow)
  }, [])

  return (
    <div className={styles.layout}>
      <ModalProvider>
        <ModalRoot/>

        <Header />

        <main>{children}</main>

        <Footer/>
      </ModalProvider>
    </div>
  )
}

export default Layout
