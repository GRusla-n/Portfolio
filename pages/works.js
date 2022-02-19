import {Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Section from '../components/section'
import {WorkGridItem} from '../components/grid-item'
import thumbCat from '../public/images/cat.jpg'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as='h3' fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem id='cat' title='Cat' thumbnail={thumbCat}>
              Cat
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem id='cat' title='Cat' thumbnail={thumbCat}>
              Cat
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem id='cat' title='Cat' thumbnail={thumbCat}>
              Cat
            </WorkGridItem>
          </Section>
          <Section delay={1}>
            <WorkGridItem id='cat' title='Cat' thumbnail={thumbCat}>
              Cat
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem id='cat' title='Cat' thumbnail={thumbCat}>
              Cat
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works