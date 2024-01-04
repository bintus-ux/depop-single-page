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
      img_src: '/site-images/idealimg5.WEBP',
      headerText: 'Find your style',
      text: 'Founded in 2016 by Paris-born, Ivory Coast-raised creative director Sarah Diouf, Tongoro is a ready-to-wear label with a strong emphasis on African fashion and craftsmanship. All materials are sustainably sourced on the continent and each and every piece is made in Dakar, Senegal by local tailors (Senegalese tailoring is renowned for its exceptional quality). The long-term goal is to “create a new dynamic for Africa-based manufacturing, and foster the economic and social development of artisanal workers in Western Africa.”',
      buttonText: 'Check slides',
    },
    {
      _id: 2,
      img_src: '/site-images/idealimg4.JPG',
      headerText: 'Sell your way',
      text: 'Returning home for the hols also means that it is time to bring out our A-game in our fashion fam! And what better place to get our designer fix this Christmas and New Year than on the home continent? There is an abundance of talented designers making waves not just all over Africa but also on the international fashion scene',
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
      h={{
        base: 'auto',
        sm: 'auto',
        md: 'auto',
        lg: 'auto',
        xl: 'auto',
      }}
      mt={{ base: '100px', md: '150px' }}>
      <Flex direction='row' justifyContent='space-between'>
        <Heading as='h3' size='md'>
          The Afrotopia Edit
        </Heading>
        <Text style={{ color: 'rgb(114, 123, 179)' }}>See more</Text>
      </Flex>
      {mainContentItems.map((item, i) => (
        <Card
          key={i}
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
          justifyContent='space-between'
          alignItems='center'
          overflow='hidden'
          variant='outline'>
          <Image
            objectFit='cover'
            maxW={{
              base: '100%',
              sm: '100%',
              md: '100%',
              lg: '400px',
              xl: '400px',
            }}
            src={item.img_src}
            alt='pose'
          />

          <Stack
            w={{
              base: '100%',
              sm: '100%',
              md: '100%',
              lg: '60%',
              xl: '60%',
            }}
            textAlign='left'>
            <CardBody textAlign='left' padding='0'>
              <Heading size='md' py='5'>
                {item.headerText}
              </Heading>

              <Text py='2'>{item.text}</Text>
            </CardBody>

            <CardFooter textAlign='left' padding='0' py='5'>
              <Button variant='solid' colorScheme='red' className='slide_in'>
                {item.buttonText}
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      ))}
    </Box>
  )
}

export default MainContent
