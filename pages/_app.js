import {ChakraProvider} from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Font from '../components/font'
import theme from '../libs/theme'
const {AnimatePresence} = require('framer-motion') // error with import

const Website = ({Component, pageProps, router}) => {
  return (
    <ChakraProvider theme={theme}>
      <Font /> 
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} key={router.route} />
          </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website