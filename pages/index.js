import {Box, Button, Container, Heading, Image, useColorModeValue} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import {ChevronRightIcon} from '@chakra-ui/icons'
import {BioSection, BioYear} from '../components/bio'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} mt={6}
             align=' center'>
          Hello, I&apos;m a full-stack junior developer based in Czech Republic
        </Box>
        <Box display={{md: ' flex'}}>
          <Box flexGrow={1}>
            <Heading as='h2' variant=' page-title'>
              Ruslan Gavshin
            </Heading>
            <p>React + Redux, JS (TS) // Networking + Cisco</p>
          </Box>
          <Box mt={{base: 4, md: 0}} ml={{md: 6}} align=' center'>
            <Image src='/images/me.jpg' borderWidth={2} borderStyle=' solid' maxWidth='100px'
                   borderColor='whiteAlpha.800'
                   borderRadius='full' alt='me' />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>Work</Heading>
          <Paragraph>Something about me </Paragraph>
          <Box align='center' my={4}>
            <NextLink href='/works'>
              <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>My portfolio</Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as='h3' variant='section-title'>
            Bio
          </Heading>
          <BioSection>
            <BioYear>1995</BioYear>
            Born in Nakhodka, Russia.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Complete the Master&apos;s Program DVGUPS, Russia.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Complete the Master&apos;s Program in VUT FEKT, Brno.
          </BioSection>
          <BioSection>
            <BioYear>2021 to present</BioYear>
            Work in UD4D as front-end developer.
          </BioSection>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page