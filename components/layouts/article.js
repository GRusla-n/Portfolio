import {GridItemStyle} from '../grid-item'

const {motion} = require('framer-motion') // error with import
import Head from 'next/head'

const variants = {
  hidden: {opacity: 0, x: 0, y: 20},
  enter: {opacity: 1, x: 0, y: 0},
  exit: {opacity: 0, x: 0, y: 20}
}

const Layout = ({children, title}) => (
  <motion.article variants={variants} initial='hidden' animate='enter' exit='exit'
                  transition={{duration: 0.4, type: 'easyInOut'}}
                  style={{position: 'relative'}}>
    <>
      {title && (<Head>
        <title>{title} - Ruslan Gavshin</title>
      </Head>)}
      {children}
      <GridItemStyle />
    </>
  </motion.article>
)

export default Layout
