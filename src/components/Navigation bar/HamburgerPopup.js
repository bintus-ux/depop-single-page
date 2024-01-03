import React from 'react'
import {
  Flex,
  Box,
  Text,
  Button,
  Stack,
  Center,
  Heading,
  Select,
  HStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import Logo from './Logo'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { IoClose } from 'react-icons/io5'
import { IoIosArrowForward } from 'react-icons/io'
import { FaInstagram } from 'react-icons/fa6'
import { FaXTwitter } from 'react-icons/fa6'
import { FaFacebookF } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'

const HamburgerPopup = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const closeMenu = () => {
    setIsOpen(!isOpen)
  }
  const listItems = [
    'Blog',
    'About',
    'Sell on Depop',
    'Depop Amplified',
    'Jobs',
    'News',
    'Support',
    'Terms',
    'Privacy',
    'Safety',
    'Sitemaps',
    'Cookies',
  ]

  return (
    <>
      <Box>
        <i
          className='fa-solid fa-bars fa-xl'
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          variant='ghost'
          size='md'
          mr={{
            base: '-10px',
            sm: '-50px',
            md: '0',
            lg: '0',
            xl: '0',
          }}
          onClick={toggleMenu}
          transition='all 0.3s'
        />
      </Box>
      <Flex
        direction='column'
        align='center'
        mt={isOpen ? 4 : 0}
        mr={isOpen ? '15px' : 0}
        py={isOpen && 2}
        px={isOpen && '10px'}
        bg='white'
        rowGap='25px'
        w={isOpen && '80%'}
        h='auto'
        overflow='hidden'
        display={isOpen ? 'flex' : 'none'}
        position='fixed'
        top='-5'
        left='0'
        bottom='0'
        zIndex='999'
        overflowY='auto'
        transition='all 0.3s'>
        <Flex
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          w='100%'>
          <Logo />
          <IoClose style={{ fontSize: '40px' }} onClick={closeMenu} />
        </Flex>
        <Flex
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          w='100%'>
          <Button
            color='white'
            bg='black'
            h={{ base: '50px', md: '50px' }}
            w='130px'
            variant='solid'
            size='xl'
            style={{ borderRadius: '5px' }}>
            <Text fontSize='20px' fontFamily='Poppins' fontWeight='bold'>
              Sign up
            </Text>
          </Button>
          <Button
            colorScheme='black'
            h={{ base: '50px', md: '50px' }}
            w='130px'
            style={{ border: '3px black solid' }}
            variant='outline'>
            <Text fontSize='20px' fontFamily='Poppins' fontWeight='700'>
              Log in
            </Text>{' '}
          </Button>
        </Flex>
        <hr />
        <Stack direction='column' w='100%' rowGap={4}>
          <Flex justifyContent='space-between' align='center'>
            <Text fontFamily='monospace' fontSize='25px' fontWeight='700'>
              Menswear
            </Text>{' '}
            <IoIosArrowForward style={{ fontSize: '30px' }} />
          </Flex>
          <Flex justifyContent='space-between' align='center'>
            <Text fontFamily='monospace' fontSize='25px' fontWeight='700'>
              Womenswear
            </Text>{' '}
            <IoIosArrowForward style={{ fontSize: '30px' }} />
          </Flex>
          <Flex justifyContent='space-between' align='center'>
            <Text fontFamily='monospace' fontSize='25px' fontWeight='700'>
              Brands
            </Text>{' '}
            <IoIosArrowForward style={{ fontSize: '30px' }} />
          </Flex>
          <Flex justifyContent='space-between' align='center'>
            <Text
              color='red'
              fontFamily='monospace'
              fontSize='25px'
              fontWeight='700'>
              New Year Sale
            </Text>{' '}
            <IoIosArrowForward style={{ fontSize: '30px' }} />
          </Flex>
        </Stack>
        <hr />
        <Box w='100%'>
          <Heading as='h3' size='lg' mb='10px'>
            More From Depop
          </Heading>
          <Center className='container'>
            <Box className='list_items'>
              {listItems.map((item, i) => (
                <Text>{item}</Text>
              ))}
            </Box>
          </Center>
          <Text style={{ fontSize: '20px' }}>Get The App</Text>
        </Box>
        <hr />
        <Flex direction='row' justifyContent='flex-start' gap='30px' w='100%'>
          <FaInstagram style={{ fontSize: '25px' }} />
          <FaXTwitter style={{ fontSize: '25px' }} />
          <FaFacebookF style={{ fontSize: '25px' }} />
          <FaTiktok style={{ fontSize: '25px' }} />
        </Flex>
        <Flex
          direction='column'
          w='100%'
          mb='30px'
          height='auto'
          justifyContent='space-between'>
          <Flex
            direction='column'
            justifyContent='space-between'
            alignItems='flex-start'
            height='50px'
            mb='30px'
            padding='0 10px'
            style={{ border: '1px solid black', position: 'relative' }}>
            <Text style={{ color: 'gray' }}>Select Language</Text>
            <Select
              h='30px'
              position='absolute'
              top='20px'
              left='-5px'
              border='none'
              fontFamily='monospace'
              aria-labelledby='Select Language'>
              <option value='en' aria-label='English' selected>
                English
              </option>
              <option value='fr' aria-label='Français'>
                Français
              </option>
              <option value='de' aria-label='Deutsch'>
                Deutsch
              </option>
              <option value='it' aria-label='Italiano'>
                Italiano
              </option>
            </Select>
          </Flex>
          <Flex
            direction='column'
            justifyContent='space-between'
            alignItems='flex-start'
            height='50px'
            padding='0 10px'
            style={{ border: '1px solid black', position: 'relative' }}>
            <Text style={{ color: 'gray' }}>Select Location</Text>
            <Select
              h='30px'
              position='absolute'
              top='20px'
              left='-5px'
              border='none'
              fontFamily='monospace'
              aria-labelledby='Select Language'>
              <option value='au' aria-label='Australia'>
                Australia
              </option>
              <option value='de' aria-label='Germany'>
                Germany
              </option>
              <option value='fr' aria-label='France'>
                France
              </option>
              <option value='gb' aria-label='United Kingdom'>
                United Kingdom
              </option>
              <option value='it' aria-label='Italy'>
                Italy
              </option>
              <option value='us' aria-label='United States' selected>
                United States
              </option>
            </Select>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default HamburgerPopup
