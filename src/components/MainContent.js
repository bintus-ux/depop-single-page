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
      img_src: '/site-images/img1.jpg',
      headerText: 'Find your style',
      text: "Shop the biggest brands you know and love. Discover independent brands making waves and the creators behind them. Whatever you're into, find the item and the seller for you on Depop.",
      buttonText: 'Shop now',
    },
    {
      _id: 2,
      img_src: '/site-images/img2.jpg',
      headerText: 'Sell your way',
      text: "Sell a few items or build your empire. Whatever your vibe we’ll share our pro tips to help you get there. It's simple to get started.      ",
      buttonText: 'Sell on Depop',
    },
  ]
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
      mt={{ base: '120px', md: '200px' }}>
      <Flex direction='row' justifyContent='space-between'>
        <Heading as='h3' size='md'>
          The Depop Edit
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
          mt='100px'
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
            textAlign='left'
            style={{ border: '1px solid red' }}>
            <CardBody>
              <Heading size='md'>{item.headerText}</Heading>

              <Text py='2'>{item.text}</Text>
            </CardBody>

            <CardFooter>
              <Button variant='solid' colorScheme='red'>
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
