import React from 'react'
import Logo from './Navigation bar/Logo'
import NavigationComponents from './Navigation bar/NavigationComponents'
import { useState } from 'react'
import {
  Box,
  Flex,
  Collapse,
  Text,
  IconButton,
  Link as ChakraLink,
  useMediaQuery,
  HStack,
  chakra,
  Button,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const Header = () => {
  const navbar = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Library',
      link: '/Library',
    },
    {
      title: 'Book Store',
      link: '/book-store',
    },
    {
      title: 'Free Ebooks',
      link: '/free-ebooks',
    },
    {
      title: 'Search',
      link: '/search',
    },
  ]
  const [isOpen, setIsOpen] = useState(false)
  const [isSmallScreen] = useMediaQuery('(max-width: 767px)')

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <chakra.header id='header'>
        <Flex
          border='2px solid red'
          w={{
            base: '100%',
            sm: 'auto',
            md: 'auto',
            lg: '100%',
            xl: '100%',
          }}
          px='15px'
          mx='auto'
          align='center'
          justify='space-between'
          borderBottom='ridge 0.5px lightgrey'>
          <>
            {isSmallScreen ? (
              <>
                <Flex align='center' justify='space-between'>
                  <Box>
                    <i
                      className='fa-solid fa-bars'
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
                    />
                  </Box>
                  <Logo />
                </Flex>

                <Collapse in={isOpen} animateOpacity>
                  <Flex
                    direction='column'
                    align='center'
                    mt={isOpen ? 4 : 0}
                    mr={isOpen ? '15px' : 0}
                    py={isOpen ? 2 : 0}
                    px={isOpen ? '10px' : 0}
                    bg='gray.100'>
                    {navbar.map((navItem, i) => (
                      <ChakraLink
                        key={i}
                        to={navItem.link}
                        mr={[1, 1, 4, 4]}
                        color='black'
                        style={{ textDecoration: 'none' }}
                        p={2}
                        _activeLink={{
                          fontWeight: 'bold',
                          borderBottom: 'solid Olive 1px',
                        }}
                        _hover={{
                          fontWeight: 'bold',
                        }}>
                        {navItem.title}
                      </ChakraLink>
                    ))}
                  </Flex>
                </Collapse>
              </>
            ) : (
              <Box>
                <Text
                  color='red'
                  fontSize='25px'
                  fontFamily='inter'
                  fontWeight='800'>
                  depop
                </Text>
              </Box>
            )}
          </>
          <NavigationComponents />
        </Flex>
      </chakra.header>
    </>
  )
}

export default Header
