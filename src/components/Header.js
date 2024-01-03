import React from 'react'
import Logo from './Navigation bar/Logo'
import NavigationComponents from './Navigation bar/NavigationComponents'
import SearchBar from './Navigation bar/SearchBar'
import SubHeader from './Navigation bar/SubHeader'
import HamburgerPopup from './Navigation bar/HamburgerPopup'
import { useState } from 'react'
import {
  Box,
  Flex,
  Collapse,
  Text,
  Link as ChakraLink,
  useMediaQuery,
  HStack,
  chakra,
  Button,
} from '@chakra-ui/react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSmallScreen] = useMediaQuery('(max-width: 767px)')

  return (
    <>
      <chakra.header id='header'>
        <Flex
          w={{
            base: '100%',
            sm: 'auto',
            md: 'auto',
            lg: '100%',
            xl: '100%',
          }}
          h={{ base: '70px', md: 'auto' }}
          px={{
            base: '10px',
            sm: '10px',
            md: '10px',
            lg: '30px',
            xl: '30px',
          }}
          mx='auto'
          align='center'
          justify='space-between'
          borderBottom='ridge 0.5px lightgrey'>
          <>
            {isSmallScreen ? (
              <>
                <Flex
                  align='center'
                  justify='space-between'
                  w='120px'
                  style={{ border: '1px solid red' }}>
                  <HamburgerPopup />
                  <Logo />
                </Flex>
              </>
            ) : (
              <Box>
                <Logo />
              </Box>
            )}
          </>
          {isSmallScreen ? (
            <Box className='search_container' marginLeft='70px'>
              <Box className='circle'></Box>
              <Box className='line'></Box>
            </Box>
          ) : (
            <SearchBar />
          )}

          <NavigationComponents />
        </Flex>
        <SubHeader />
      </chakra.header>
    </>
  )
}

export default Header
