import React from 'react'
import { Box, Flex, Text, Button } from '@chakra-ui/react'
import { FiHeart } from 'react-icons/fi'
import { GoLock } from 'react-icons/go'

const NavigationComponents = () => {
  return (
    <Flex
      w='auto'
      gap='20px'
      align='center'
      justify='space-between'
      border='blue 2px solid'>
      <Box>
        {' '}
        <FiHeart size={28} />
      </Box>
      <Box>
        {' '}
        <GoLock size={28} />
      </Box>
      <Button color='white' bg='black' h='50px' variant='solid' size='md'>
        <Text fontSize='20px' fontWeight='bold'>
          Sign up
        </Text>
      </Button>{' '}
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
      </Button>{' '}
    </Flex>
  )
}

export default NavigationComponents
