import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Image,
  Card,
  Stack,
  CardBody,
  CardFooter,
  Button,
} from '@chakra-ui/react'
import React from 'react'

const MainContent = () => {
  const mainContentItems = [
    {
      _id: 1,
      img_src: '/site-images/idealimg1.PNG',
      headerText: 'Find your style',
      text: 'One of the most prominent names among African fashion designers, the label counts Beyoncé, Naomi Campbell, Iman and Alicia Keys as fans, who no doubt favour it not just for the billowing silhouettes, bold patterns and graphic prints that ripple through the collections (SS22 sees voluminous shapes and black-and-white geometric motifs blazoned across flowing jumpsuits, maxi dresses and playsuits) – but also for the fact that the brand is based around empowering women.',
      buttonText: 'Check slides',
    },
    {
      _id: 2,
      img_src: '/site-images/idealimg4.JPG',
      headerText: 'Sell your way',
      text: 'Returning home for the hols also means that it is time to bring out our A-game in our fashion fam! And what better place to get our designer fix this Christmas and New Year than on the home continent? There is an abundance of talented designers making waves not just all over Africa but also on the international fashion scene',
      buttonText: 'Sell on Afrotopia',
    },
    {
      _id: 3,
      img_src: '/site-images/idealimg5.WEBP',
      headerText: 'Sell your way',
      text: 'Founded in 2016 by Paris-born, Ivory Coast-raised creative director Sarah Diouf, Tongoro is a ready-to-wear label with a strong emphasis on African fashion and craftsmanship. All materials are sustainably sourced on the continent and each and every piece is made in Dakar, Senegal by local tailors (Senegalese tailoring is renowned for its exceptional quality). The long-term goal is to “create a new dynamic for Africa-based manufacturing, and foster the economic and social development of artisanal workers in Western Africa.”',
      buttonText: 'Sell on Afrotopia',
    },
  ]

  function handleScroll() {
    const pageTop =
      document.documentElement.scrollTop || document.body.scrollTop
    const pageBottom = pageTop + window.innerHeight
    const fadeups = document.querySelectorAll('.slide_in')

    fadeups.forEach((slide_in) => {
      if (slide_in.getBoundingClientRect().top < pageBottom) {
        slide_in.classList.add('visible')
      } else {
        slide_in.classList.remove('visible')
      }
    })
  }

  document.addEventListener('scroll', handleScroll)

  return (
    <Box
      position='relative'
      w={{
        base: '100%',
        sm: '90%',
        md: '100%',
        lg: '100%',
        xl: '80%',
      }}
      alignContent='center'
      mx='auto'
      px={{
        base: '10px',
        sm: '10px',
        md: '10px',
        lg: '30px',
        xl: '30px',
      }}
      h='auto'
      mt={{ base: '100px', md: '150px' }}>
      <Flex direction='row' justifyContent='space-between'>
        <Heading as='h3' size='md'>
          The Afrotopia Edit
        </Heading>
        <Text style={{ color: 'rgb(114, 123, 179)' }}>See more</Text>
      </Flex>
      {mainContentItems.map((item, i) => (
        <Flex
          key={i}
          style={{ border: '2px solid red' }}
          direction={
            item._id % 2 === 0
              ? [
                  'column',
                  'column',
                  'row-reverse',
                  'row-reverse',
                  'row-reverse',
                ]
              : ['column', 'column', 'row', 'row', 'row']
          }
          mt='50px'
          mb='20px'
          mx='auto'
          justifyContent='space-between'
          alignItems='center'
          overflow='hidden'
          variant='outline'>
          <Image height='500px' width='400px' src={item.img_src} alt='pose' />
          <Flex
            direction='column'
            justifyContent='center'
            alignItems='flex-start'
            px='auto'
            w={{
              base: 'auto',
              sm: '300px',
              md: '300px',
              lg: '500px',
              xl: '600px',
            }}>
            <Heading size='md' py='5'>
              {item.headerText}
            </Heading>

            <Text
              py='2'
              mb={{
                base: '30px',
                sm: '30px',
                md: '10px',
                lg: '30px',
                xl: '70px',
              }}
              fontWeight='normal'
              fontSize='0.975rem'
              color='rgb(38, 38, 38)'
              lineHeight='1.5'>
              {item.text}
            </Text>

            <Button
              variant='solid'
              w='200px'
              colorScheme='red'
              className='slide_in'>
              {item.buttonText}
            </Button>
          </Flex>
        </Flex>
      ))}
    </Box>
  )
}

export default MainContent
