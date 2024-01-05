import React from 'react'
import { Box, Flex, Text, Button, useMediaQuery } from '@chakra-ui/react'
import { FiHeart } from 'react-icons/fi'
import { GoLock } from 'react-icons/go'

const NavigationComponents = () => {
  const [isSmallScreen] = useMediaQuery('(max-width: 767px)')

  return (
    <Flex
      w='auto'
      gap={{
        base: '10px',
        sm: '20px',
        md: '20px',
        lg: '20px',
        xl: '20px',
      }}
      align='center'
      justify='space-between'>
      {!isSmallScreen && (
        <Box>
          {' '}
          <FiHeart size={28} />
        </Box>
      )}
      <Box>
        {' '}
        <GoLock size={28} />
      </Box>
      <Button
        color='white'
        bg='black'
        h={{ base: '50px', md: '50px' }}
        w={{
          base: '70px',
          sm: '50px',
          md: '100px',
          lg: '100px',
          xl: '100px',
        }}
        variant='solid'
        style={{ borderRadius: '5px' }}>
        <Text
          fontSize={{
            base: '14px',
            sm: '20px',
            md: '20px',
            lg: '20px',
            xl: '20px',
          }}
          fontFamily='inter'
          fontWeight='900'>
          Sign up
        </Text>
      </Button>{' '}
      {!isSmallScreen && (
        <Button
          color='black'
          border='none'
          bg='white'
          h='50px'
          variant='solid'
          size='md'>
          <Text fontSize='20px' fontWeight='bold'>
            Log in
          </Text>
        </Button>
      )}{' '}
    </Flex>
  )
}

export default NavigationComponents
