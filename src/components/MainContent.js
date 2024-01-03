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
      mt={{ base: '120px', md: '200px' }}
      style={{ border: '1px solid red' }}>
      <Flex direction='row' justifyContent='space-between'>
        <Heading as='h3' size='md'>
          The Depop Edit
        </Heading>
        <Text style={{ color: 'rgb(114, 123, 179)' }}>See more</Text>
      </Flex>
      <Card
        direction={{
          base: 'column',
          sm: 'column',
          md: 'column',
          lg: 'row',
          xl: 'row',
        }}
        mt='100px'
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
          src='/site-images/img1.jpg'
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
            <Heading size='md'>Find your style</Heading>

            <Text py='2'>
              Shop the biggest brands you know and love. Discover independent
              brands making waves and the creators behind them. Whatever you're
              into, find the item and the seller for you on Depop.
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant='solid' colorScheme='red'>
              Shop now
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </Box>
  )
}

export default MainContent
