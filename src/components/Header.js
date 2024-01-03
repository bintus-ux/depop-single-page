import React from 'react'
import Logo from './Navigation bar/Logo'
import NavigationComponents from './Navigation bar/NavigationComponents'
import SearchBar from './Navigation bar/SearchBar'
import SubHeader from './Navigation bar/SubHeader'
import HamburgerPopup from './Navigation bar/HamburgerPopup'
import { CiSearch } from 'react-icons/ci'
import { useState } from 'react'
import {
  Box,
  Flex,
  Link as ChakraLink,
  useMediaQuery,
  chakra,
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
            sm: '100%',
            md: '100%',
            lg: '100%',
            xl: '100%',
          }}
          h={{ base: '70px', md: '70px' }}
          px={{
            base: '10px',
            sm: '10px',
            md: '10px',
            lg: '30px',
            xl: '30px',
          }}
          mx='auto'
          position='fixed'
          align='center'
          zIndex='1'
          justify='space-between'
          borderBottom='ridge 0.5px lightgrey'
          style={{ backgroundColor: 'white' }}>
          <>
            {isSmallScreen ? (
              <>
                <Flex align='center' justify='space-between' w='120px'>
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
          <Box marginLeft={{ base: 'auto', md: 'auto' }}>
            {isSmallScreen ? (
              <CiSearch style={{ fontSize: '35px' }} />
            ) : (
              <SearchBar />
            )}
          </Box>

          <NavigationComponents />
        </Flex>
        <SubHeader />
      </chakra.header>
    </>
  )
}

export default Header
